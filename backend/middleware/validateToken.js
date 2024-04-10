const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken');
const validateToken = asyncHandler(
    async (req, res, next) => {
        let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
            jwt.verify(token,"saish1234", (err, decoded) => {
                if (err) {
                    res.status(401);
                    throw new Error("user is not verified");
                }
                req.user = decoded. user;
                next();
            });
            if(!token){
                res.status(401);
                //saish
                throw new Error("user is not authorized");
            }
        }
    }
)

module.exports=  validateToken;