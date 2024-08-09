import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/products', async (req, res) => {
 const products = await prisma.product.findMany();
  res.json(products);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
