const path = require('path');
const fs = require('fs');
const args = process.argv;

//   vars    //
let featureName = 'MutatorContract';
// -------- //

// Name var //
const nameIndex = args.indexOf('--name');
if (nameIndex !== -1) {
	featureName = args[nameIndex + 1];
} else {
	throw Error('No entitie name');
}
// -------- //

const basePath = path.resolve(__dirname, '..', '..', '..', 'src', 'features');

// 1. Create entitie dir
const featuresPath = path.resolve(basePath, featureName);
if (!fs.existsSync(featuresPath)) {
	fs.mkdirSync(featuresPath);
} else {
	throw Error('path is already exist');
}

// 2. Create Public API file
const publicApiFilePath = path.resolve(featuresPath, 'index.ts');
const ReadMeFilePath = path.resolve(featuresPath, 'Readme.md');

if (!fs.existsSync(publicApiFilePath)) {
	fs.writeFileSync(publicApiFilePath, '');
	fs.writeFileSync(ReadMeFilePath, `# ${featureName}`);
}

// 3. Create model folders
const modelPath = path.resolve(basePath, featureName, 'model');
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
const uiPath = path.resolve(basePath, featureName, 'ui');
fs.mkdirSync(uiPath);
