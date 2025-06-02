import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.resolve('./counter.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(fileData);

    json.count += 1;

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');

    res.status(200).json({ success: true, count: json.count });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
