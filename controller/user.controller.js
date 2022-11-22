const userDb = require("../database/users.json");
const {fileServices} = require("../service");

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await fileServices.reader();

            res.json(users)
        } catch (e) {
            next(e);
        }
    },
    create: async (req, res, next) => {
        try {
            const {name, age} = req.body;

            const users = await fileServices.reader();

            const newUser = {
                id: users[users.length - 1].id + 1,
                name,
                age
            };
            users.push(newUser);
            await fileServices.writer(users)

            res.status(201).json(newUser)
        } catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    updateUser: (req, res, next) => {
        try {
            const newUserInfo = req.body;
            const userId = req.params.userId;
            userDb[userId] = newUserInfo;
            res.json('Updated')
        } catch (e) {
            next(e);
        }

    }

}