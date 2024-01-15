const ParentModel = require("../../models/PurchasesModel/PurchasesModel");
const ChildsModel = require("../../models//PurchasesModel/PurchasesProductsModel");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const CreateParentChildService = require("../../services/common/CreateParentChildService");
const DeleteParentChildSevice = require("../../services/common/DeleteParentChildSevice");



exports.CreatePurchases=async (req, res) => {
    let Result= await CreateParentChildService(req,ParentModel,ChildsModel,'PurchaseID');
    res.status(200).json(Result)
}


exports.PurchasesList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage={$lookup: {from: "suppliers", localField: "SupplierID", foreignField: "_id", as: "suppliers"}};
    let SearchArray=[{Note: SearchRgx},{'suppliers.Name': SearchRgx},{'suppliers.Address': SearchRgx},{'suppliers.Phone': SearchRgx},{'suppliers.Email': SearchRgx}]
    let Result=await ListOneJoinService(req,ParentModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}

exports.PurchasesDelete=async (req, res) => {
    let Result=await DeleteParentChildSevice(req,ParentModel,ChildsModel,'PurchaseID');
    res.status(200).json(Result)
}