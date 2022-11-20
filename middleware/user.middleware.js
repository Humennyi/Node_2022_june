const userDb = require("../database/users");
const AppError = require("../error/AppError");

module.exports = {
    checkIsUserExist: (req, res, next) => {
        try {
            const {userId} = req.params;

            const user = userDb[userId];

            if (!user){
                throw new AppError('User not found',404)
            }

            req.user = user;

            next();

        }catch (e) {
         next(e)
        }



    }
}