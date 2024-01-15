const UserModel = require("../../models/Users Model/UserModel");

const UserDetailsService = async(req,res)=>{
    try {
        let email = req.headers['email'];
        let data = await UserModel.aggregate([{$match:{email:email}}]);
        return{status:"succeess", data:data}
    } catch (e) {
        return{status:"fail", message:"Something Went Wrong"}
    }
}

module.exports=UserDetailsService;