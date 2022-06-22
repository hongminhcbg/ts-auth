import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ? process.env.PORT : '8080';

function middleware(req: Request, resp: Response, next: express.NextFunction) {
  console.log('req = ', req.body);
  next();
}

app.use(express.json(), middleware);
app.get('/health', (req: Request, res: Response) => {
  res.send('alive');
});

app.post('/foo', (req: Request, resp: Response) => {
  console.log(req.body);
  let age = req.body.age ? req.body.age : 7;

  let obj = {
    'Key': 'val',
    'cnt': 4,
    'age': age,
  }
  resp.send(obj);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

