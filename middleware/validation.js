let jwt = require('jsonwebtoken');

const validation = (req, res, next) => {
    console.debug("authorization --> " + req.headers["authorization"]);
    if (req.headers["authorization"]) {
        const token = req.headers["authorization"].split(" ")[1];
        const payload = jwt.verify(token, "thisissecreateKey")
        console.log(payload);
        if (token) {
            next()
        } else {
            res.status(401).json({
                error: true,
                message: "Authorization failed",
                data: null
            })
        }
    } else {
        res.status(401).json({
            error: true,
            message: "Not Authorized",
            data: null
        })
    }
}

module.exports = validation;