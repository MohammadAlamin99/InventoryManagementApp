
const ParentModel = require("../../models/Returns Model/ReturnsModel");
const ChildsModel = require("../../models/Returns Model/ReturnProductsModel");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const CreateParentChildService = require("../../services/common/CreateParentChildService");
const DeleteParentChildSevice = require("../../services/common/DeleteParentChildSevice");



exports.CreateReturns=async (req, res) => {
    let Result= await CreateParentChildService(req,ParentModel,ChildsModel,'ReturnID');
    res.status(200).json(Result)
}


exports.ReturnsList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage={$lookup: {from: "customers", localField: "CustomerID", foreignField: "_id", as: "customers"}};
    let SearchArray=[{Note: SearchRgx},{'customers.Name': SearchRgx},{'customers.Address': SearchRgx},{'customers.Phone': SearchRgx},{'customers.Email': SearchRgx}]
    let Result=await ListOneJoinService(req,ParentModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}


exports.ReturnsDelete=async (req, res) => {
    let Result=await DeleteParentChildSevice(req,ParentModel,ChildsModel,'ReturnID');
    res.status(200).json(Result)
}
