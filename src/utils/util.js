import fs from 'fs';
import path from 'path';

export const DATA_FILE = path.resolve('./src/store/store.json');

export const readData = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

export const writeData = (data) => {
console.log("file path:",DATA_FILE);

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};