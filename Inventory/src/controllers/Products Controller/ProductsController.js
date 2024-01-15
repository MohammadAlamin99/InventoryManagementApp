const { default: mongoose } = require("mongoose");
const DataModel = require("../../models/Products Model/ProductsModel")
const CreateService = require("../../services/common/CreateService");
const ListTwoJoinService = require("../../services/common/ListTwoJoinService");
const UpdateService = require("../../services/common/UpdateService");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const ReturnProductsModel = require("../../models/Returns Model/ReturnProductsModel");
const PurchaseProductsModel = require("../../models/PurchasesModel/PurchasesProductsModel");
const SaleProductsModel = require("../../models/Sales Model/SaleProductsModel");
const DeleteService = require("../../services/common/DeleteService");



exports.CreateProduct=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}


exports.UpdateProduct=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.ProductsList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Name: SearchRgx},{Unit: SearchRgx},{Details: SearchRgx},{'brands.Name':SearchRgx},{'categories.Name':SearchRgx}]
    let JoinStage1= {$lookup: {from: "brands", localField: "BrandID", foreignField: "_id", as: "brands"}}
    let JoinStage2= {$lookup: {from: "categories", localField: "CategoryID", foreignField: "_id", as: "categories"}}

    let Result=await ListTwoJoinService(req,DataModel,SearchArray,JoinStage1,JoinStage2);
    res.status(200).json(Result)
}


exports.DeleteProduct=async (req, res) => {
    let DeleteID=req.params.id;
    const ObjectId = mongoose.Types.ObjectId;

    let CheckReturnAssociate= await CheckAssociateService({ProductID:new ObjectId(DeleteID)},ReturnProductsModel);
    let CheckPurchaseAssociate= await CheckAssociateService({ProductID:new ObjectId(DeleteID)},PurchaseProductsModel);
    let CheckSaleAssociate= await CheckAssociateService({ProductID:new ObjectId(DeleteID)},SaleProductsModel);

    if(CheckReturnAssociate){
        res.status(200).json({status: "associate", data: "Associate with Return"})
    }
    else if(CheckPurchaseAssociate){
        res.status(200).json({status: "associate", data: "Associate with Purchase"})
    }
    else if(CheckSaleAssociate){
        res.status(200).json({status: "associate", data: "Associate with Sale"})
    }
    else{
        let Result=await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}
