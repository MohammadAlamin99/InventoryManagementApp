const mongoose = require("mongoose");

const CreateParentChildService = async(req, ParentModel, ChildsModel, JoinPropertyName)=>{
    // Create Transaction session
    const session = await mongoose.startSession();

    try {
        // Begin Transaction
        await session.startTransaction();

        // parent database process
        let Parent=req.body['Parent'];
        Parent.UserEmail=req.headers['email'];
        let ParentCreation = await ParentModel.create([Parent],{session});


        // child database process
        let Childs=req.body['Childs'];
        await Childs.forEach(element => {
            element[JoinPropertyName] = ParentCreation[0]['_id'];
            element.UserEmail = req.headers['email'];
        });

        let ChildCreation = await ChildsModel.insertMany(Childs,{session})

         // Transaction Success
         await session.commitTransaction();
         session.endSession();

        return {status: "success", Parent: ParentCreation, Childs:ChildCreation}

    } catch (e) {
          // Roll Back Transaction if Fail
        await session.abortTransaction();
        session.endSession();

        return {status: "fail", data: "something went wrong"}
    }
}

module.exports = CreateParentChildService;