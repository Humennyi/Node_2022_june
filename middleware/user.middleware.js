const userDb = require("../database/users.json");
const AppError = require("../error/AppError");
const {fileServices} = require("../service");

module.exports = {
    checkIsUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const users = await fileServices.reader()

            const user = users.find((user) => user.id === +userId)

            if (!user) {
                throw new AppError('User not found', 404)
            }

            req.user = user;
            next();
        } catch (e) {
            next(e)
        }
    },
    isBodyValid: (req, res, next) => {
        try {
            const {name,age}=req.body;
            if (!name || name.length < 3) {
                return res.status(400).json('Wrong name')
            }
            if (age < 18 || Number.isNaN(+age)) {
                return res.status(400).json('Wrong age')
            }
            next();
        } catch (e) {
            next(e)
        }


    }

}