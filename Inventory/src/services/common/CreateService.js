const CreateService = async(req, DataModel)=>{
    try {
        let reqbody = req.body;
        reqbody.UserEmail = req.headers['email'];

        let data = await DataModel.create(reqbody);
        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}  
    }

}

module.exports=CreateService