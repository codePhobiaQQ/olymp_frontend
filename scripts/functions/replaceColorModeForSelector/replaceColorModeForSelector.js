const { traverseFiles } = require('./core/traverseFiles.js');
const path = require('path');
const fs = require('fs');

const srcFolderPath = path.join(__dirname, '..', '..');

// let tmp = 0

function processFile(filePath) {
  // if (tmp != 0) return

  const fileContent = fs.readFileSync(filePath, 'utf8');

  if (
    fileContent.indexOf(
      'const colorMode = useAppSelector(state => state.app.colorMode)',
    ) !== -1
  ) {
    console.log(filePath);

    // Заменяем строку и записываем обновленное содержимое обратно в файл
    let updatedContent = fileContent.replace(
      'const colorMode = useAppSelector(state => state.app.colorMode)',
      'const colorMode = useAppSelector(getColorMode)',
    );

    // Заменяем строку и записываем обновленное содержимое обратно в файл
    updatedContent =
      "import { getColorMode } from '@store/index'\n" + updatedContent;

    fs.writeFileSync(filePath, updatedContent, 'utf8');
  }
}

traverseFiles(srcFolderPath, processFile);
