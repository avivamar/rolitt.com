require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Translate } = require('@google-cloud/translate').v2;

const localesDir = path.join(__dirname, '../src/locales');
const enFile = path.join(localesDir, 'en.json');

// 初始化 Google Translate
const translate = new Translate({ key: process.env.GOOGLE_TRANSLATE_API_KEY });

// 读取英文文件
const enContent = JSON.parse(fs.readFileSync(enFile, 'utf8'));

// 获取所有语言文件
const localeFiles = fs.readdirSync(localesDir).filter(file => file !== 'en.json');

async function translateObject(obj, targetLang) {
  const translatedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && !Array.isArray(value)) {
      translatedObj[key] = await translateObject(value, targetLang);
    } else if (typeof value === 'string') {
      const [translation] = await translate.translate(value, targetLang);
      translatedObj[key] = translation;
    } else {
      translatedObj[key] = value;
    }
  }
  return translatedObj;
}

async function syncAndTranslateLocales() {
  for (const file of localeFiles) {
    const filePath = path.join(localesDir, file);
    let localeContent = {};
    const targetLang = file.split('.')[0];

    // 如果文件存在，读取其内容
    if (fs.existsSync(filePath)) {
      localeContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    // 递归合并对象，翻译新内容
    async function mergeAndTranslate(target, source) {
      for (const key of Object.keys(source)) {
        if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
          if (!target[key] || typeof target[key] !== 'object') {
            target[key] = {};
          }
          await mergeAndTranslate(target[key], source[key]);
        } else if (!target[key]) {
          const [translation] = await translate.translate(source[key], targetLang);
          target[key] = translation;
        }
      }
    }

    await mergeAndTranslate(localeContent, enContent);

    // 写入更新后的内容
    fs.writeFileSync(filePath, JSON.stringify(localeContent, null, 2));
    console.log(`Updated and translated ${file}`);
  }
}

syncAndTranslateLocales().catch(console.error);