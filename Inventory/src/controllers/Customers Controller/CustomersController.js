const DataModel = require("../../models/Customers Model/CustomersModel");
const SalesModel = require("../../models/Sales Model/SalesModel");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const CreateService = require("../../services/common/CreateService");
const DeleteService = require("../../services/common/DeleteService");
const DropDownService = require("../../services/common/DropDownService");
const ListService = require("../../services/common/ListService");
const UpdateService = require("../../services/common/UpdateService");
const mongoose = require("mongoose");



exports.CreateCustomer=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.CustomerList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{CustomerName: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}


exports.UpdateCustomer=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}


exports.CustomerDropDown=async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,CustomerName:1})
    res.status(200).json(Result)
}


exports.DeleteCustomer = async(req, res)=>{
    try {
        let deleteId = req.params.id;
        const objectId = mongoose.Types.ObjectId;
        let CheckAssociate = await CheckAssociateService({CustomerID: new objectId(deleteId)}, SalesModel);
        if(CheckAssociate){
            res.status(200).json({status: "associate", data: "Associate with Sales"})
        } 
        else{
            let Result=await DeleteService(req,DataModel);
            res.status(200).json(Result)
        }
    } catch (e) {
        
    }
}
