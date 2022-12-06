// App

class AddAccount {
  constructor(server, api) {
    api.post('/V1ZkU2ExRlhUbXBpTTFaMVpFRTlQUT09', async (req, res) => {
      const nim = req.body.nim;
      const password = req.body.password;
      
      if(nim === '' || password === '') {
        res.status(404).send('Request not Valid');

        return;
      }

      server.tempAccount = {
        ...server.tempAccount,
        [nim]: {
          password
        }
      };

      res.send('OK');
    });
  }
};

export default AddAccount;