import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const verifytoken = (allowedRoles = []) => {
  return (req, res, next) => {
    try {
      // GET TOKEN
      const token = req.cookies?.token;

      // TOKEN NOT FOUND
      if (!token) {
        return res.status(401).json({
          message: "Please Login First",
        });
      }

      // VERIFY TOKEN
      const decodedToken = jwt.verify(
        token,
        process.env.SECRET_KEY
      );

      console.log(decodedToken);

      // ROLE CHECK
      if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(decodedToken.role)
      ) {
        return res.status(403).json({
          message: "You are not authorized",
        });
      }

      // STORE USER DATA
      req.user = decodedToken;

      // NEXT MIDDLEWARE
      next();
    } catch (err) {
      return res.status(401).json({
        message: "Session Expired. Please Relogin",
        error: err.message,
      });
    }
  };
};

export default verifytoken;
