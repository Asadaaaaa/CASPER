// App
import AddAccount from "./AddAccount.js";
import AddUser from "./AddUser.js";
import GetUser from "./GetUser.js";
import GetAccount from "./GetAccount.js";

class RoutesHandler {
  constructor(server, api) {
    new AddAccount(server, api);
    new AddUser(server, api);
    new GetUser(server, api);
    new GetAccount(server, api);
  }
}

export default RoutesHandler;