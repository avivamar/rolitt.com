const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/locales');
const enFile = path.join(localesDir, 'en.json');

// Read the English file
const enContent = JSON.parse(fs.readFileSync(enFile, 'utf8'));

// Get all language files
const localeFiles = fs
  .readdirSync(localesDir)
  .filter((file) => file !== 'en.json');

localeFiles.forEach((file) => {
  const filePath = path.join(localesDir, file);
  let localeContent = {};

  // If the file exists, read its content
  if (fs.existsSync(filePath)) {
    localeContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  // Recursively merge objects, preserving translated content
  function mergeObjects(target, source) {
    Object.keys(source).forEach((key) => {
      if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
        if (!target[key] || typeof target[key] !== 'object') {
          target[key] = {};
        }
        mergeObjects(target[key], source[key]);
      } else if (!target[key]) {
        target[key] = source[key];
      }
    });
  }

  mergeObjects(localeContent, enContent);

  // Write the updated content
  fs.writeFileSync(filePath, JSON.stringify(localeContent, null, 2));
  console.log(`Updated ${file}`);
});

console.log('Locale files synchronized successfully.');
