import * as fs from 'fs/promises';
import * as path from 'path';

export const SaveToDB = async (data: any): Promise<void> => {
  try {
    const dbPath = path.join(process.cwd(), 'src/db/courses-db.json');
    const jsonToString = JSON.stringify(data, null, 2);
    await fs.writeFile(dbPath, jsonToString, 'utf8');
  } catch (error) {
    console.error('Failed to update the JSON file:', error);
  }
};
