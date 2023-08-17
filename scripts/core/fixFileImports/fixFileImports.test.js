const { describe, test } = require('node:test');
const { fixFileImports } = require('./fixFileImports.js');
const path = require('path');

describe('fixFileImports', () => {
  test('import {} from **/*', () => {
    const filePath = path.resolve(__dirname, 'file.tsx');
    const result = fixFileImports(filePath);
  });
});
