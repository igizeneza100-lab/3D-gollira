import express from 'express';
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const sql = neon(process.env.DATABASE_URL);

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    await sql`
      INSERT INTO contact_submissions (name, email, phone, message)
      VALUES (${name}, ${email}, ${phone}, ${message})
    `;
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    await sql`
      INSERT INTO newsletter_subscriptions (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
    `;
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
