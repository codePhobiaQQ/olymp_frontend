const { traverseFiles } = require('./core/traverseFiles.js');
const { fixFileImports } = require('../../core/fixFileImports/fixFileImports.js');
const path = require('path');
const srcFolderPath = path.join(__dirname, '..');

function stickImports(filePath) {
	console.log(filePath);
	fixFileImports(filePath);
	console.log('success');
}

traverseFiles(srcFolderPath, stickImports);
