const path = require('path');
const fs = require('fs');
const args = process.argv;

//   vars    //
let pageName = 'NotFoundPage';
// -------- //

// Name var //
const nameIndex = args.indexOf('--name');
if (nameIndex !== -1) {
	pageName = args[nameIndex + 1];
} else {
	throw Error('No page name');
}
// -------- //

const basePath = path.resolve(__dirname, '..', '..', '..', 'src', 'pages');

// 1. Create page dir
const pagesPath = path.resolve(basePath, pageName);
if (!fs.existsSync(pagesPath)) {
	fs.mkdirSync(pagesPath);
} else {
	throw Error('path is already exist');
}

// 2. Create Public API file
const publicApiFilePath = path.resolve(pagesPath, 'index.ts');
const ReadMeFilePath = path.resolve(pagesPath, 'Readme.md');

if (!fs.existsSync(publicApiFilePath)) {
	fs.writeFileSync(publicApiFilePath, `export { ${pageName}Async as ${pageName} } from './ui/${pageName}.async';`);
	fs.writeFileSync(ReadMeFilePath, `# ${pageName}`);
}

// 2. Create UI path
const uiPath = path.resolve(basePath, pageName, 'ui');
fs.mkdirSync(uiPath);

// 4. Create page file
const pageFilePath = path.resolve(uiPath, pageName + '.tsx');
const pageAsyncFilePath = path.resolve(uiPath, pageName + '.async.tsx');

fs.writeFileSync(
	pageFilePath,
	`import { Page } from "@widgets/Page";\n\nconst ${pageName} = () => {\n\treturn <Page>${pageName}</Page>;\n};\n\nexport default ${pageName};
`,
);
fs.writeFileSync(pageAsyncFilePath, `import { lazy } from 'react';\n\nexport const ${pageName}Async = lazy(() => import('./${pageName}'));`);
