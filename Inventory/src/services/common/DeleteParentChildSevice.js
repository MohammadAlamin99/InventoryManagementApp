
const DeleteParentChildsService = async (req, ParentModel, ChildsModel, JoinPropertyName) => {
    try {
        // Parent Deletion
        const parentId = req.params.id;
        const email = req.headers['email'];

        // First process: Delete parent
        const parentQuery = { _id: parentId, UserEmail: email };
        const parentDeleteResult = await ParentModel.deleteMany(parentQuery);

        // Second process: Delete child documents associated with the parent
        const childQuery = { [JoinPropertyName]: parentId, UserEmail: email };
        const childDeleteResult = await ChildsModel.deleteMany(childQuery);

        return { status: "success", Parent: parentDeleteResult, Childs: childDeleteResult };
    } catch (e) {
        return { status: "fail", data: e };
    }
};

module.exports = DeleteParentChildsService;



