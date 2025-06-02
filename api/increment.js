// /api/increment.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.resolve('./counter.json');
  let data = { total: 1000 };

  try {
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    data.total += 1;
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update counter' });
  }

  res.status(200).json({ total: data.total });
}
