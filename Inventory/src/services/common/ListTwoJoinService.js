

const ListTwoJoinService = async (req, DataModel, SearchArray, JoinStage1, JoinStage2) => {
    try {
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchKeyword = req.params.searchKeyword;
        let UserEmail = req.headers['email'];

        let skipRow = (pageNo - 1) * perPage;

        let data;
        if (searchKeyword !== "0") {
            let searchQuery = { $or: SearchArray };

          
            data = await DataModel.aggregate([
                { $match: { UserEmail: UserEmail } },
                { $match: searchQuery },
                JoinStage1,
                JoinStage2,
                {
                    $facet: {
                        metadata: [{ $count: "total" }],
                        data: [{ $skip: skipRow }, { $limit: perPage }],
                    },
                },
            ]);
        } else {
           
            data = await DataModel.aggregate([
                { $match: { UserEmail: UserEmail } },
                JoinStage1,
                JoinStage2,
                {
                    $facet: {
                        metadata: [{ $count: "total" }],
                        data: [{ $skip: skipRow }, { $limit: perPage }],
                    },
                },
            ]);
        }


        const [result] = data;

        return { status: "success", total: result.metadata[0].total, data: result.data };
    } catch (e) {
        return { status: "fail", data: e };
    }
};

module.exports = ListTwoJoinService;
