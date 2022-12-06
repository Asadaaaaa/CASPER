// App
import UserService from "../services/UserService.js";
import AccountService from "../services/AccountService.js";


class AddUser {
  constructor(server, api) {
    api.post('/V1ZkU2ExWllUbXhqWnowOQ==', async (req, res) => {
      const name = req.body.name;
      const nim = req.body.nim;
      
      if(name === '' || nim === '') {
        res.status(404).send('Request not Valid');

        return;
      }

      if(server.tempAccount[nim] !== undefined) {
        const userService = new UserService(server);
        await userService.addUser({ name, nim });

        const accountService = new AccountService(server);
        await accountService.addAccount({ nim, password: server.tempAccount[nim].password });
        
        delete server.tempAccount[nim];
      } else {
        res.status(500).send('Data not found');
        return;
      }

      res.send('OK');
    });
  }
};

export default AddUser;