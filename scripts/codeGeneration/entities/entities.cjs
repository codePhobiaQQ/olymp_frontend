const path = require('path');
const fs = require('fs');
const args = process.argv;

//   vars    //
let entiteName = 'MutatorContract';
// -------- //

// Name var //
const nameIndex = args.indexOf('--name');
if (nameIndex !== -1) {
	entiteName = args[nameIndex + 1];
} else {
	throw Error('No entitie name');
}
// -------- //

const basePath = path.resolve(__dirname, '..', '..', '..', 'src', 'entities');

// 1. Create entitie dir
const entitiesPath = path.resolve(basePath, entiteName);
if (!fs.existsSync(entitiesPath)) {
	fs.mkdirSync(entitiesPath);
} else {
	throw Error('path is already exist');
}

// 2. Create Public API file
const publicApiFilePath = path.resolve(entitiesPath, 'index.ts');
const ReadMeFilePath = path.resolve(entitiesPath, 'Readme.md');

if (!fs.existsSync(publicApiFilePath)) {
	fs.writeFileSync(publicApiFilePath, '');
	fs.writeFileSync(ReadMeFilePath, `# ${entiteName}`);
}

// 3. Create model folders
const modelPath = path.resolve(basePath, entiteName, 'model');
fs.mkdirSync(modelPath);

// 4. Create inners model dirs
const selectorsPath = path.resolve(modelPath, 'selectors');
fs.mkdirSync(selectorsPath);
const servicesPath = path.resolve(modelPath, 'services');
fs.mkdirSync(servicesPath);
const slicePath = path.resolve(modelPath, 'slice');
fs.mkdirSync(slicePath);
const typesPath = path.resolve(modelPath, 'types');
fs.mkdirSync(typesPath);

// 5. Create UI path
const uiPath = path.resolve(basePath, entiteName, 'ui');
fs.mkdirSync(uiPath);
