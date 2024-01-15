const OTPSModel = require("../../models/Users Model/OTPModel");
const UserModel = require("../../models/Users Model/UserModel");


const UserResetPass = async(req, res)=>{
    try {
        let email = req.body['email'];
        let OTPCode = req.body['OTP'];
        let NewPass =  req.body['password'];
        let statusUpdate = 1;
        let restPass = await OTPSModel.aggregate([{$match:{email:email, otp:OTPCode, status:statusUpdate}},{$count:"total"}]);
        if(restPass.length>0){
            await UserModel.updateOne({email:email},{password:NewPass});
            return({status: "success", data: "Change the password"})
        }
        else{
            return({status: "fail", data: "Invalid Request"})
        }
    } catch (error) {
        return {status:"fail", message:"something went wrong"}
    }
}

module.exports = UserResetPass;