const { Helper } = require("./user.helper");
const helper = new Helper();
class UserServices {

  async SignIn(req) {
    const { email } = req.body;
    //Below statement checks whether the email exist or not. 
    const checkMail = await helper.SelectFromDb(email);
    if (!checkMail) {
      
      const res = await helper.InsertInDb(req);
      return res;
    } else return false;
  }

  async LogIn(req) {
    const {email, password} = req.body
    const loggedIn = await helper.Logger(email, password)
    if(!loggedIn) return false;
    return true;
  }
}
module.exports = { UserServices };
