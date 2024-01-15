const UserModel = require("../../models/Users Model/UserModel");
const OTPModel = require("../../models/Users Model/OTPModel");
const sendgmaill = require("../../utility/sendgmaill");


const UserEmailVerifyService = async(req, res)=>{
    try {
        let email = req.params.email;
        let OTPCode =  Math.floor(100000 + Math.random() * 900000);
        let userCount = await UserModel.aggregate([{$match:{email:email}},{$count:"total"}]);
        if(userCount.length>0){
            let setOtp = await OTPModel.create({email:email, otp:OTPCode});
            // send email code
            let sentemail = await sendgmaill(email,"Your PIN Code is= "+OTPCode,"Inventory PIN Verification");
            return({status: "success", data: "Your otp code has been success"})
        }
        else{
            return {status: "fail", data: error.toString()}
        }
    } catch (error) {
        
    }
}
module.exports = UserEmailVerifyService;