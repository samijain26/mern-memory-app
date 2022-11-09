const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {

  // 1. Check if the user has a token (...if it's in the headers)
  
    const token = req.header("auth-token");
  console.log(token)
    if (!token) {
    res.status(401).json({ error: "send a valid token" });
    }
  
    try {
    //    token -> "Bearer 090jlsdk89398jflgjdfg9839579352"
    //token = token.replace("Bearer ", "");
    const payload = jwt.verify(token, process.env.JWT_SECRET);

        req.userid = payload.id
        req.user = payload.user
            next();
    } catch (error) {
        res.status(401).json({error:error.message})
  }
}

module.exports = {authorize}