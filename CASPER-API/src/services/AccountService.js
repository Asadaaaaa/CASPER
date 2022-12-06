class AccountService {
  constructor(server) {
    this.server = server;
    this.db = this.server.model.db;
    this.collection = this.db.collection('account');
  }

  async addAccount(data) {
    let nimExist = await this.collection.findOne({ nim: data.nim });

    if(nimExist === null) {
      await this.collection.insertOne({
        nim: data.nim,
        passwords: [
          {
            value: data.password,
            tries: 1
          }
        ]
      });
    } else {
      const isPasswordExist = () => {
        return nimExist.passwords.some((val) => {
          return val.value === data.password;
        });
      }
      
      if(isPasswordExist(data.password)) {
        const index = nimExist.passwords.findIndex((val) => val.value === data.password);

        nimExist.passwords[index].tries++;
        await this.collection.updateOne({ nim: data.nim }, { $set: { passwords: nimExist.passwords }});
        
        return;
      } else {
        nimExist.passwords.push({
          value: data.password,
          tries: 1
        });
        await this.collection.updateOne({ nim: data.nim }, { $set: { passwords: nimExist.passwords }});

        return;
      }
      
    }
  }

  async getAccount(nim) {
    let data = await this.collection.findOne({ nim: nim });

    return data;
  }
};

export default AccountService;