const express =require('express');
const router =express.Router();
const UsersController=require("../controllers/Users/UsersController");
const BrandsController=require("../controllers/Brands Controller/BrandsController");
const CategoryController=require("../controllers/Category Controller/CategoryController");
const CustomersController=require("../controllers/Customers Controller/CustomersController");
const SuppliersController=require("../controllers/Suppliers Controller/SuppliersController");
const ExpenseTypesController=require("../controllers/Expense Controller/ExpenseTypesController");
const ExpenseController=require("../controllers/Expense Controller/ExpenseController");
const ProductsController=require("../controllers/Products Controller/ProductsController");
const PurchasesController=require("../controllers/Purchases Controller/PurchasesController");
const SalesController=require("../controllers/Sales Controller/SalesController");
const ReturnsController=require("../controllers/Returns Controller/ReturnsController");
const ReportController=require("../controllers/Report Controller/ReportController");

const AuthVerificationMiddleware = require('../middlewares/AuthVerificationMiddleware');


router.post("/Registration",UsersController.Registration);
router.get("/userDetails",AuthVerificationMiddleware,UsersController.UserDetails);
router.post("/updateProfile",AuthVerificationMiddleware,UsersController.UserUpdateProfile);
router.post("/login",UsersController.UserLogin);
router.get("/emailVerify/:email",UsersController.UserEmailVerify);
router.get("/verifyOTP/:email/:otp",UsersController.UserOTPVerify);
router.post("/resetPass",UsersController.UserChangePass);

// Brand
router.post("/createBrands",AuthVerificationMiddleware,BrandsController.CreateBrand);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,BrandsController.BrandList);
router.post("/BrandUpdate/:id",AuthVerificationMiddleware,BrandsController.UpdateBrand);
router.get("/BrandDropDown",AuthVerificationMiddleware,BrandsController.BrandDropDown);
router.get("/DeleteBrand/:id",AuthVerificationMiddleware,BrandsController.DeleteBrand);

// Category
router.post("/CreateCategory",AuthVerificationMiddleware,CategoryController.CreateCategory);
router.get("/CategoryList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,CategoryController.CategoryList);
router.post("/UpdateCategory/:id",AuthVerificationMiddleware,CategoryController.UpdateCategory);
router.get("/CategoryDropDown",AuthVerificationMiddleware,CategoryController.CategoryDropDown);
router.get("/DeleteCategories/:id",AuthVerificationMiddleware,CategoryController.DeleteCategories);

// Customer
router.post("/CreateCustomer",AuthVerificationMiddleware,CustomersController.CreateCustomer);
router.get("/CustomerList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,CustomersController.CustomerList);
router.post("/UpdateCustomer/:id",AuthVerificationMiddleware,CustomersController.UpdateCustomer);
router.get("/CustomerDropDown",AuthVerificationMiddleware,CustomersController.CustomerDropDown);
router.get("/DeleteCustomer/:id",AuthVerificationMiddleware,CustomersController.DeleteCustomer);

// Suppliers
router.post("/CreateSuppliers",AuthVerificationMiddleware,SuppliersController.CreateSuppliers);
router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,SuppliersController.SuppliersList);
router.post("/UpdateSuppliers/:id",AuthVerificationMiddleware,SuppliersController.UpdateSuppliers);
router.get("/SuppliersDropDown",AuthVerificationMiddleware,SuppliersController.SuppliersDropDown);
router.get("/DeleteSupplier/:id",AuthVerificationMiddleware,SuppliersController.DeleteSupplier);

// Expense types
router.post("/CreateExpenseTypes",AuthVerificationMiddleware,ExpenseTypesController.CreateExpenseTypes);
router.get("/ExpenseTypesList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,ExpenseTypesController.ExpenseTypesList);
router.post("/UpdateExpenseTypes/:id",AuthVerificationMiddleware,ExpenseTypesController.UpdateExpenseTypes);
router.get("/ExpenseTypesDropDown",AuthVerificationMiddleware,ExpenseTypesController.ExpenseTypesDropDown);
router.get("/DeleteExpenseTypes/:id",AuthVerificationMiddleware,ExpenseTypesController.DeleteExpenseTypes);


// Expense
router.post("/CreateExpense",AuthVerificationMiddleware,ExpenseController.CreateExpense);
router.post("/UpdateExpense/:id",AuthVerificationMiddleware,ExpenseController.UpdateExpense);
router.get("/ExpensesList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,ExpenseController.ExpensesList);
router.get("/DeleteExpense/:id",AuthVerificationMiddleware,ExpenseController.DeleteExpense);


// Products 
router.post("/CreateProduct",AuthVerificationMiddleware,ProductsController.CreateProduct);
router.post("/UpdateProduct/:id",AuthVerificationMiddleware,ProductsController.UpdateProduct);
router.get("/ProductsList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,ProductsController.ProductsList);
router.get("/DeleteProduct/:id",AuthVerificationMiddleware,ProductsController.DeleteProduct);


// Purchases 
router.post("/CreatePurchases",AuthVerificationMiddleware,PurchasesController.CreatePurchases);
router.get("/PurchasesList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,PurchasesController.PurchasesList);
router.get("/PurchasesDelete/:id",AuthVerificationMiddleware,PurchasesController.PurchasesDelete);

// Sales 
router.post("/CreateSales",AuthVerificationMiddleware,SalesController.CreateSales);
router.get("/SalesList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,SalesController.SalesList);
router.get("/SalesDelete/:id",AuthVerificationMiddleware,SalesController.SalesDelete);


// Returns 
router.post("/CreateReturns",AuthVerificationMiddleware,ReturnsController.CreateReturns);
router.get("/ReturnsList/:pageNo/:perPage/:searchKeyword",AuthVerificationMiddleware,ReturnsController.ReturnsList);
router.get("/ReturnsDelete/:id",AuthVerificationMiddleware,ReturnsController.ReturnsDelete);


// Report
router.post("/ExpensesByDate",AuthVerificationMiddleware,ReportController.ExpensesByDate);
router.post("/PurchaseByDate",AuthVerificationMiddleware,ReportController.PurchaseByDate);
router.post("/ReturnByDate",AuthVerificationMiddleware,ReportController.ReturnByDate);
router.post("/SalesByDate",AuthVerificationMiddleware,ReportController.SalesByDate);
module.exports=router;