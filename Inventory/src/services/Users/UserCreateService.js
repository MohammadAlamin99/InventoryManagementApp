const UserModel = require("../../models/Users Model/UserModel");

const UserCreateService = async(req,res)=>{
 try {
    let reqbody = req.body;
    let data = await UserModel.create(reqbody);
    return{status:"success", data:data}
 } catch (e) {
    return{status:"fail", message:"Something Went Wrong"}
 }
}

module.exports=UserCreateService;