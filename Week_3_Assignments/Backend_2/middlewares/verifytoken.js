import jwt from 'jsonwebtoken'
const {verify}=jwt



export function verifyToken(req, res, next){
    //token verification logic
    const token = req.cookies?.token;
    //if req from unauthorized user
    if(!token){
        return res.status(401).json({message:"please login to continue!"});
    }
    try{
    //if token is existed
        const decodeToken=verify(token, 'abcdef');
        console.log(decodeToken);
        req.user = decodeToken;
        next();
    }catch(err){
        res.status(401).json({message:"Session expire. please relogin"})
    }
}