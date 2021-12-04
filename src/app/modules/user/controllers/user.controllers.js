const User = require('../factory/user.factory')

exports.signupUser = async (req, res, next) => {
    try {
        console.log("REQ_OBJECT", req.body)
        const {name, email, password} = req.body;
        console.log(name);
        const newUser = new User();
        newUser.createUser(name, email,password);
        console.log(newUser);
        return res.send(newUser);
    } catch (error) {
        console.log(error);
    }
}