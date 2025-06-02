import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'counter.json');

  let counter = 1000;
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath);
    counter = JSON.parse(raw).total || 1000;
  }

  counter += 1;

  fs.writeFileSync(filePath, JSON.stringify({ total: counter }));

  res.status(200).json({ success: true, total: counter });
}
