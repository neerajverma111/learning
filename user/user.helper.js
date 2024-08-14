const databaseConnection = require("../database/connection");
const connect = new databaseConnection().connectDb().promise();
const { v4: uuidv4 } = require("uuid");

class Helper {
  //This function is adding data to database
  async InsertInDb(req) {
    try {
      let { name, email, password, confirmPassword } = req.body;
      const res = await connect.query(
        "INSERT INTO RegisterUser (name, email, password, confirmPassword) VALUES (?, ?, ?, ?)",
        [name, email, password, confirmPassword]
      );
      if (res.error !== undefined) return false;
      return true;
    } catch (error) {
      console.log(`Error adding user ${error}`);
      return false;
    }
  }
  /**
   * below function matc the data in database and perform login operations
   */
  async SelectFromDb(userEmail) {
    const res = await connect.query(
        "SELECT email FROM RegisterUser WHERE email = ?", 
        [userEmail]
    ) 
    // console.log("email::::",res[0].length);
    if(res[0].length == 0) return false;
    return true
    // {status:true,message="password not valid"}
    // return res;
  }
  async Logger(email, password){
    const res = await connect.query(
      "SELECT email FROM RegisterUser WHERE email = ? AND password = ?", 
      [email, password]
    )
    if(res[0].length == 0) return false;
    return true
  }
  UpdateInDb() {}
  DeleteFromDb() {}
}
module.exports = { Helper };
