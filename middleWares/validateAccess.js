const jwt = require("jsonwebtoken");
const logger = require("../loggers/loggers");
class ValidateAccess {
    validateAccess(roles){
        return (req, res, next) => {
          try {
            const user=jwt.verify(req.headers.authorization, process.env.SECRET)
            if(roles.includes('any')){
              return next()
            }
            if (roles.includes(user.user.role)) {
             return next()
            }
            else{
              return res.status(403).json({ message: "Acces denied. Insuficient permissions." });
            }
            
          } catch (error) {
            logger.error('Error in token verification')
            return res.status(403).json({ message: "Acces denied. invalid or expired Token." });
          }
        };
      }
}
module.exports = ValidateAccess;
