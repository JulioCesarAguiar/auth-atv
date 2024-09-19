const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const validateToken = asyncHandler(async(req,res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if(authHeader && authHeader.startsWith("Bearer")){
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
      if(err){
        res.status(401);
        throw new Error("Usuário não é autorizado");
      }
      req.user = decoded.user;
      next();
    });

    if(!token){
      res.status(401);
      throw new Error("Usuário não autorizado ou token está faltando");
    }
  } 
}); 

module.exports = validateToken;