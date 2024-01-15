const UserModel = require("../../models/Users Model/UserModel");

const UserUpdateService = async(req) =>{
    try {
        let reqbody = req.body;
        let email = req.headers['email'];
        let data = await UserModel.updateOne({email:email}, reqbody);
        return {status: "success", data: data}
    } catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = UserUpdateService;