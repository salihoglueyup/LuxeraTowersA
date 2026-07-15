const fs = require('fs');
const path = require('path');

const updates = {
  tr: {
    title1: "Basın Ekspres'te",
    title2: "Gökyüzü",
    title3: "Bahçeleri"
  },
  en: {
    title1: "In Basın Ekspres",
    title2: "Sky",
    title3: "Gardens"
  },
  ar: {
    title1: "في باسن إكسبريس",
    title2: "حدائق",
    title3: "السماء"
  },
  ru: {
    title1: "В Басын Экспрес",
    title2: "Небесные",
    title3: "Сады"
  }
};

const localesDir = path.join(__dirname, 'src', 'locales');
const langs = ['tr', 'en', 'ar', 'ru'];

langs.forEach(lang => {
  const filePath = path.join(localesDir, lang, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Ensure hero object exists
    if (!data.hero) data.hero = {};
    
    data.hero.title1 = updates[lang].title1;
    data.hero.title2 = updates[lang].title2;
    data.hero.title3 = updates[lang].title3;
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${lang}/translation.json`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
