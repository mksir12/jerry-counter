let count = 1000;

export default async function handler(req, res) {
  try {
    count++;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
