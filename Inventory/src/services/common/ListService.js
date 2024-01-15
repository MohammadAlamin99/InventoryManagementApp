

const ListService = async (req, DataModel, SearchArray) => {
    try {
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchKeyword = req.params.searchKeyword;
        let UserEmail = req.headers['email'];

        let skipRow = (pageNo - 1) * perPage;

        let data;
        if (searchKeyword !== "0") {
            let searchQuery = { $or: SearchArray };

            // Use $facet to get both Total and Rows in a single query
            data = await DataModel.aggregate([
                { $match: { UserEmail: UserEmail } },
                { $match: searchQuery },
                {
                    $facet: {
                        metadata: [{ $count: "total" }],
                        data: [{ $skip: skipRow }, { $limit: perPage }],
                    },
                },
            ]);
        } else {
            // If no search keyword, perform a simple aggregation
            data = await DataModel.aggregate([
                { $match: { UserEmail: UserEmail } },
                {
                    $facet: {
                        metadata: [{ $count: "total" }],
                        data: [{ $skip: skipRow }, { $limit: perPage }],
                    },
                },
            ]);
        }

        // Extract the results from the aggregation
        const [result] = data;

        return { status: "success", total: result.metadata[0].total, data: result.data };
    } catch (e) {
        return { status: "fail", data: e };
    }
};

module.exports = ListService;
