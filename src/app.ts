import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(function (req, res, next) {
  console.log(`[${req.method}]: ${req.url}`);
  next();
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Pokedex service running on port ${PORT}`);
});
