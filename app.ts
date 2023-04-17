import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// loads .env file contents into process.env;
dotenv.config();

const app: Express = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running on http://${host}:${port}`);
});