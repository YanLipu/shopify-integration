import { PrismaClient } from '@prisma/client';
import express from 'express';
import products from './routes/products';

const app = express();
const port = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.use(express.json());

app.get('/healt-check', (req, res) => {
  res.send('Hello, World!');
});

app.use('/', products)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
