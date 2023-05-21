import { readdir, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const ROOT_PATH = join(__dirname, '../../../');
const SRC_PATH = join(ROOT_PATH, 'src');

function generateIndexFiles(
  {
    dry = true,
    override = false,
  },
) {
  const explore = (path) => {
    return readdir(path, { withFileTypes: true })
      .then((entries) => {

        const generateLines = (entries) => {
          return Promise.all(
            entries.map((entry) => {
              const entryName = entry.name;
              if (entry.isDirectory()) {
                return explore(join(path, entryName))
                  .then((indexWasCreated) => {
                    return indexWasCreated
                      ? [
                        `export * from './${entryName}/index';`,
                      ]
                      : [];
                  });
              } else if (
                entryName.endsWith('.ts')
                && (entryName !== 'index.ts')
              ) {
                return [
                  `export * from './${entryName.slice(0, -3)}';`
                ];
              } else {
                return [];
              }
            }),
          )
            .then((lines) => lines.flat());
        };

        const writeLines = (lines) => {
          const hasIndex = entries.some((entry) => (entry.name === 'index.ts'));
          const indexFilePath = join(path, 'index.ts');

          if (lines.length > 0) {
            if (!hasIndex || override) {
              const indexFileContent = lines.join('\n') + '\n';
              if (dry) {
                console.log(`create ${indexFilePath}`);
                // console.log(indexFileContent);
                return true;
              } else {
                return writeFile(indexFilePath, indexFileContent)
                  .then(() => true);
              }
            }
          } else {
            if (hasIndex) {
              if (dry) {
                console.log(`remove ${indexFilePath}`);
                return false;
              } else {
                return unlink(indexFilePath)
                  .then(() => false);
              }
            }
          }

          return hasIndex;
        };

        return generateLines(entries)
          .then(writeLines);
      });
  };

  return explore(SRC_PATH);
}

const dry = process.argv.includes('--dry');
const override = process.argv.includes('--override');

generateIndexFiles({ dry, override })
  .catch((error) => {
    console.error(error);
  });
