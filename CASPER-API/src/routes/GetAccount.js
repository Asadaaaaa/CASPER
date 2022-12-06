// App
import AccountService from "../services/AccountService.js";

class GetAccount {
  constructor(server, api) {
    api.get('/getAccount', async (req, res) => {
      let nim = req.query.nim;

      if(nim === '') {
        res.status(404).send('Request not Valid');

        return;
      }
      
      let Service = new AccountService(server);
      let data = await Service.getAccount(nim);

      res.send(JSON.stringify(data, null, 2));
    });
  }
};

export default GetAccount;