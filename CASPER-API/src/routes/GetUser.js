// App
import UserService from "../services/UserService.js";

class GetUser {
  constructor(server, api) {
    api.get('/getUser', async (req, res) => {
      const Service = new UserService(server);
      let data = await Service.getAllUsers();

      res.send(JSON.stringify(data, null, 2));
    });
  }
};

export default GetUser;