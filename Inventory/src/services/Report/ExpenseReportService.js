const ExpensesModel = require("../../models/Expense/ExpenseModel");

const ExpenseReportService = async(req)=>{
    try {
        let email=req.headers['email'];
        let FormDate=  req.body['FormDate']
        let ToDate=  req.body['ToDate'];

        let data = await ExpensesModel.aggregate([
            {$match:{UserEmail:email, CreatedDate:{$gte:new Date(FormDate),$lte: new Date(ToDate)}}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Amount"}
                        }
                    }],
                    Rows:[
                        {$lookup: {from: "expensetypes", localField: "TypeID", foreignField: "_id", as: "Type"}}
                    ],
                }
            }
        ])
        return {status: "success", data: data}
    } catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = ExpenseReportService;