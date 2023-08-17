const path = require('path');
const fs = require('fs');
const args = process.argv;

//   vars    //
let widgetName = 'NotFoundwidget';
// -------- //

// Name var //
const nameIndex = args.indexOf('--name');
if (nameIndex !== -1) {
	widgetName = args[nameIndex + 1];
} else {
	throw Error('No widget name');
}
// -------- //

const basePath = path.resolve(__dirname, '..', '..', '..', 'src', 'widgets');

// 1. Create widget dir
const widgetsPath = path.resolve(basePath, widgetName);
if (!fs.existsSync(widgetsPath)) {
	fs.mkdirSync(widgetsPath);
} else {
	throw Error('path is already exist');
}

// 2. Create Public API file
const publicApiFilePath = path.resolve(widgetsPath, 'index.ts');
const ReadMeFilePath = path.resolve(widgetsPath, 'Readme.md');

if (!fs.existsSync(publicApiFilePath)) {
	fs.writeFileSync(publicApiFilePath, `export { ${widgetName} } from './ui/${widgetName}/${widgetName}';`);
	fs.writeFileSync(ReadMeFilePath, `# ${widgetName}`);
}

// 2. Create UI path
const uiPath = path.resolve(basePath, widgetName, 'ui');
fs.mkdirSync(uiPath);

// 3. Create Widget dir

const widgetPath = path.resolve(uiPath, widgetName);
fs.mkdirSync(widgetPath);

// 4. Create widget file
const widgetFilePath = path.resolve(widgetPath, widgetName + '.tsx');
const cssWidgetFilePath = path.resolve(widgetPath, widgetName + '.module.scss');

fs.writeFileSync(
	widgetFilePath,
	`import { memo } from 'react';
import cls from './${widgetName}.module.scss';
import cn from 'classnames';

interface ${widgetName}Props {
	className?: string;
}

export const ${widgetName} = memo(({ className = '' }: ${widgetName}Props) => {
	return <div className={cn(className, cls.${widgetName})}>${widgetName}</div>;
});`,
);
fs.writeFileSync(cssWidgetFilePath, `.${widgetName} {}`);
