import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'counter.json');
  const data = JSON.parse(await fs.readFile(filePath, 'utf-8'));
  data.count += 1;
  await fs.writeFile(filePath, JSON.stringify(data));
  return res.status(200).json({ count: data.count });
}
