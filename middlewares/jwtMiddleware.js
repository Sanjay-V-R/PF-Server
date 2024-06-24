const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log("Inside jwtMiddleware");
    // define logic to verify token
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token);
    if (token) {
        try {
            // verify token
            const jwtResponse = jwt.verify(token, process.env.JWT_PASSWORD)
            console.log(jwtResponse);
            req.payload = jwtResponse.userId
            next()
        } catch (err) {
            res.status(401).json("Invalid Token... Please Login!!!")
        }
    } else {
        res.status(404).json("Missing Token!!!")
    }
}

module.exports = jwtMiddleware