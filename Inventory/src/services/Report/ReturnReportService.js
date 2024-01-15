const ReturnProductsModel = require("../../models/Returns Model/ReturnProductsModel");

const ReturnReportService = async(req, res)=>{
    try {
        let email=req.headers['email'];
        let FormDate=  req.body['FormDate']
        let ToDate=  req.body['ToDate']

        let data=await  ReturnProductsModel.aggregate([
            {$match: {UserEmail:email,CreatedDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Total"}
                        }
                    }],
                    Rows:[
                        {$lookup: {from: "products", localField: "ProductID", foreignField: "_id", as: "products"}},
                        {$unwind : "$products" },
                        {$lookup: {from: "brands", localField: "products.BrandID", foreignField: "_id", as: "brands"}},
                        {$lookup: {from: "categories", localField: "products.CategoryID", foreignField: "_id", as: "categories"}}
                    ],
                }
            }


        ])
        return {status: "success", data: data}
    } catch (e) {
        console.log(e)
        return {status: "fail", data: e.toString()}
    }
}

module.exports=ReturnReportService