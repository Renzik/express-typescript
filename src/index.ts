import express, { Request, Response, NextFunction } from 'express';
const PORT: number = 3000;
const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(`
  <div>
  <h1>Hello there!</h1>
  </div>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
