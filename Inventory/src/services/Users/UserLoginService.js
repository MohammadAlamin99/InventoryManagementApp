const UserModel = require("../../models/Users Model/UserModel");
const createToken = require("../../utility/createToken");

const UserLoginService = async(req, res)=>{
    try {
        let reqBody = req.body;
        let data = await UserModel.aggregate([{$match:reqBody}, 
            {$project:{"_id":0,"password":0,"createdDate":0 }}]);
        if(data.length>0){
            let token = await createToken(data[0]['email']);
            return {status:"success",token:token,data:data[0]}
        }
        else{
            return {status:"unauthorized"}
        }
    } catch (e) {
        return {status: "fail", data: e.toString()}
        
    }
}

module.exports = UserLoginService;