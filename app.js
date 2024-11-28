import 'dotenv/config';
import express from 'express';
import routesPassFail from './routes/pass-fail.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/pass-fail', routesPassFail);


try {
    const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
  });
} catch (error) {    
  console.error('Error starting server:', error);
}

process.on('SIGINT', async () => {
  dbClient.disconnect();
  process.exit(0);
});