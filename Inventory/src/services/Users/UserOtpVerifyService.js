const OTPModel = require("../../models/Users Model/OTPModel");



const UserOtpVerifyService = async(req, res)=>{
   try {
    let email = req.params.email;
    let OTPCode = req.params.otp;
    let status=0;
    let statusUpdate=1;
    let OTPCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status: status}}, {$count: "total"}]);
    if(OTPCount.length>0){
        let OTPUpdate = await OTPModel.updateOne({email: email, otp: OTPCode, status: status}, {email: email, otp: OTPCode, status: statusUpdate})
        return {status: "success", data: OTPUpdate}
    }
    else{
        return  {status: "fail", data: "Invalid OTP Code"}
    }
   } catch (error) {
    console.log(error)
    return {status: "fail", data: error.toString()}
   }

} 

module.exports = UserOtpVerifyService;