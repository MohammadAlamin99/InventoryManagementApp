const UserCreateService = require("../../services/Users/UserCreateService");
const UserDetailsService = require("../../services/Users/UserDetailsService");
const UserLoginService = require("../../services/Users/UserLoginService");
const UserUpdateService = require("../../services/Users/UserUpdateService");
const UserEmailVerifyService = require("../../services/Users/UserEmailVerifyService");
const UserOtpVerifyService = require("../../services/Users/UserOtpVerifyService");
const UserResetPass = require("../../services/Users/UserResetPassService");

exports.Registration=async (req, res) => {
    let Result=await UserCreateService(req)
    res.status(200).json(Result)
}


exports.UserDetails=async (req, res) => {
    let Result=await UserDetailsService(req)
    res.status(200).json(Result)
}

exports.UserLogin=async (req, res) => {
    let Result=await UserLoginService(req)
    res.status(200).json(Result)
}

exports.UserUpdateProfile=async (req, res) => {
    let Result=await UserUpdateService(req)
    res.status(200).json(Result)
}

exports.UserEmailVerify=async (req, res) => {
    let Result=await UserEmailVerifyService(req)
    res.status(200).json(Result)
}

exports.UserOTPVerify=async (req, res) => {
    let Result=await UserOtpVerifyService(req)
    res.status(200).json(Result)
}

exports.UserChangePass=async (req, res) => {
    let Result=await UserResetPass(req)
    res.status(200).json(Result)
}