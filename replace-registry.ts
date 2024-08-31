import * as fs from 'fs';

const filePath = './package-lock.json';
const fileContent = fs.readFileSync(filePath, 'utf8');

const updatedContent = fileContent.replace(
  /https:\/\/registry\.npmmirror\.com/g, 
  'https://registry.npmjs.org'
);

fs.writeFileSync(filePath, updatedContent, 'utf8');

console.log('替换完成');