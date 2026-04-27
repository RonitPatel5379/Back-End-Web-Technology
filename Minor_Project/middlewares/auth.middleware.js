import jwt from "jsonwebtoken"

function authMiddleware(req,res,next) {
  try {
    if(req.url.toString().indexOf('login')>-1) {
      next()
    }
    else {
      const decoded = jwt.verify(req.headers.authorization.split(" ")[1],"write")
      next()
    } 
  } catch(err) {
     res.status(401).send({error:true,message:"Unauthorized"})
  }
}

export default {authMiddleware}