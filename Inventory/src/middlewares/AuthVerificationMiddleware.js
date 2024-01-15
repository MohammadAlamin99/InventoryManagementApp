const jwt = require("jsonwebtoken");

module.exports = (req, res, next)=>{
    let token = req.headers['token'];
    jwt.verify(token, 'secretKey123', function (err, decoded){
        if(err){
            res.status(401).json({status:"unauthorized"})
        }
        else{
            let email = decoded['data'];
            req.headers.email = email;
            next();
        }
    })

}