const DeleteService = async(req, DataModel)=>{
    try {
        let email = req.headers['email'];
        let DeleteID = req.params.id;

        let DeleteResult = await DataModel.deleteMany({ UserEmail: email, _id: DeleteID })
        return {status: "success",Delete:DeleteResult}
    } catch (e) {
        console.log(e)
        return {status: "fail", data: e}
    }
}

module.exports = DeleteService;