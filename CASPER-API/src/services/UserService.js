class UserService {
  constructor(server) {
    this.server = server;
    this.db = this.server.model.db;
    this.collection =  this.db.collection('user');
  }

  async addUser(data) {
    let user = await this.collection.findOne({ nim: data.nim });
    
    if(user === null) {
      this.collection.insertOne({
        nim: data.nim,
        name: data.name
      });
      
      return;
    }
  }
  
  async getAllUsers() {
    let data = (await this.collection.find({})).toArray();

    return data;
  }
};

export default UserService;