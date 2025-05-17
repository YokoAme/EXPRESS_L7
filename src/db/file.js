const fs = require('fs');

const readFile = (path) => {
  try {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
  } catch {
    return [];
  }
};

const writeFile = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

module.exports = {
  readFile,
  writeFile
};
