const ExpenseReportService = require("../../services/Report/ExpenseReportService")
const PurchasesReportService = require("../../services/Report/PurchasesReportService")
const ReturnReportService = require("../../services/Report/ReturnReportService")
const SalesReportService = require("../../services/Report/SalesReportService")


exports.ExpensesByDate=async (req, res) => {
    let Result=await ExpenseReportService(req)
    res.status(200).json(Result)
}

exports.PurchaseByDate=async (req, res) => {
    let Result=await PurchasesReportService(req)
    res.status(200).json(Result)
}

exports.ReturnByDate=async (req, res) => {
    let Result=await ReturnReportService(req)
    res.status(200).json(Result)
}

exports.SalesByDate=async (req, res) => {
    let Result=await SalesReportService(req)
    res.status(200).json(Result)
}



