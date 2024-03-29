const DataModel = require("../../models/Expense/ExpenseModel")
const CreateService = require("../../services/common/CreateService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const UpdateService = require("../../services/common/UpdateService");
const DeleteService = require("../../services/common/DeleteService");



exports.CreateExpense=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}


exports.UpdateExpense=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}


exports.ExpensesList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Note: SearchRgx},{'Type.Name': SearchRgx}]
    let JoinStage= {$lookup: {from: "expensetypes", localField: "TypeID", foreignField: "_id", as: "Type"}}
    let Result=await ListOneJoinService(req,DataModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}


exports.DeleteExpense=async (req, res) => {
    let Result=await DeleteService(req,DataModel);
    res.status(200).json(Result)
}
