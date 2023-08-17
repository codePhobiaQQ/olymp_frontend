const fs = require('fs');

const regex =
  /import\s+(\w+|\w+\s*,\s*{[^{}"']+}|{[^{}"']+})\s+from\s+['"]([^'"]+)['"];?/g;

const fixFileImports = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const importsArray = fileContent.match(regex);

  if (!importsArray?.length) return;

  // ---------------------------------------
  let tmpContent = fileContent;
  for (let i = 0; i < importsArray?.length; i++) {
    tmpContent = tmpContent.replace(importsArray[i], '');
    tmpContent = tmpContent.replace('\n', '');
  }
  // ---------------------------------------
  // Удаляем одинаковыые import
  // ---------------------------------------
  const uniqueImportsArray = [...new Set([...importsArray])];
  // ---------------------------------------
  // Склеивание импортов
  // ---------------------------------------
  const importMap = {};

  // .1 Создаем unique import paths
  const uniqueImportPaths = [
    ...new Set(
      uniqueImportsArray.map((imp) => {
        importMap[imp.match(/['"].+['"]/g)[0]] = {
          default: '',
          notDefault: [],
        };

        return imp.match(/['"].+['"]/g)[0];
      }),
    ),
  ];

  // .2
  for (importPath of uniqueImportPaths) {
    for (importLine of uniqueImportsArray) {
      if (importLine.includes(importPath)) {
        // compare default import + not default imports
        if (
          importLine.match(/\w+\s*,\s*{\s*[^{}"']+\s*}/g) &&
          importLine.match(/\w+\s*,\s*{\s*[^{}"']+\s*}/g)?.[0]
        ) {
          const compareString = importLine.match(/\w+\s*,\s*{[^{}"']+}/g)?.[0];

          importMap[importPath].default = compareString.split(',')[0];

          const notDefaultImports = compareString
            .match(/({\s*[^{}'"]+\s*})/g)?.[0]
            .trim()
            .replace('{', '')
            .replace('}', '')
            .split(',')
            .map((el) => el.trim());

          notDefaultImports.forEach((notDefaultImport) => {
            importMap[importPath].notDefault.push(notDefaultImport);
          });
        }

        // not default { import }
        else if (
          importLine.match(/({\s*[^{}'"]+\s*})/g) &&
          importLine.match(/({\s*[^{}'"]+\s*})/g)?.[0]
        ) {
          const notDefaultImports = importLine
            .match(/({\s*[^{}'"]+\s*})/g)?.[0]
            .trim()
            .replace('{', '')
            .replace('}', '')
            .split(',')
            .map((el) => el.trim());
          notDefaultImports.forEach((notDefaultImport) => {
            importMap[importPath].notDefault.push(notDefaultImport);
          });
        }

        // only default import
        else if (
          importLine.match(/import\s+(\w+)/g) &&
          importLine.match(/import\s+(\w+)/g)
        ) {
          importMap[importPath].default = importLine
            .match(/import\s+(\w+)/g)?.[0]
            .replace('import', '')
            .trim();
        }
      }
    }
  }

  // CleanUp import map
  Object.entries(importMap).forEach(([key, mapItems]) => {
    if (!mapItems.notDefault) return;
    importMap[key].notDefault = [...new Set(mapItems.notDefault)];
  });

  let resultImports = '';

  // import map to string content
  for (link in importMap) {
    let defaultValue = importMap[link].default.replace("'", '');
    let notDefaultValues;

    if (importMap[link].notDefault.length) {
      notDefaultValues =
        '{ ' +
        importMap[link].notDefault
          .map((el, index) => {
            if (index == importMap[link].notDefault.length - 1)
              return el.toString();
            else return el.toString() + ', ';
          })
          .join('')
          .replace("'", '') +
        ' }';
    }

    const isZap = defaultValue && notDefaultValues?.length ? ',' : '';

    if (defaultValue || notDefaultValues?.length) {
      resultImports +=
        'import' +
        `${defaultValue ? ' ' + defaultValue + isZap : ''}` +
        `${notDefaultValues ? ' ' + notDefaultValues : ''}` +
        ' ' +
        'from' +
        ' ' +
        link +
        ';' +
        '\n';
    }
  }

  fs.writeFileSync(filePath, resultImports + tmpContent, 'utf-8');
};

module.exports = {
  fixFileImports,
};
