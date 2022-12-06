// Library
import express, { json } from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs-extra';

// App
import RoutesHandler from './routes/RoutesHandler.js';
import ModelHandler from './models/ModelHandler.js';

class Server {
  constructor() {
    this.init();
  }

  async init() {
    this.model = new ModelHandler(this);
    await this.model.connect('mongodb+srv://admin:adminXotech0808@octatech.yy12f.mongodb.net/?retryWrites=true&w=majority');

    this.tempAccount = {};

    this.runAPI();
  }

  runAPI() {
    const PORT =  3001;
    const api =  express();
    
    api.use(json());
    api.use(cors());

    new RoutesHandler(this, api);

    api.listen(PORT, () => {
      console.log('Server Started, Listening Port ' + PORT);
    });

    // https.createServer({
    //   key: fs.readFileSync('/etc/letsencrypt/live/avast.ddns.net/privkey.pem', 'utf8'),
    //   cert: fs.readFileSync('/etc/letsencrypt/live/avast.ddns.net/cert.pem', 'utf8'),
    //   ca: fs.readFileSync('/etc/letsencrypt/live/avast.ddns.net/chain.pem', 'utf8')
    // }, api).listen(PORT, () => {
    //   console.log(`\n\n>>> Server Running, Port ${PORT} <<<`);
    // });
  }
};

new Server();