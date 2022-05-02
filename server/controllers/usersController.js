const User=require('../models/userModel');
const bcrypt=require('bcrypt');
module.exports.register = async(req, res, next) => {
        try {
            console.log(req.body);
            const {
                username,
                email,
                password
            } = req.body;
            const usernameCheck = await User.findOne({
                username
            });
            if (usernameCheck)
                return res.json({
                    msg: "Username already used",
                    status: false
                });
            const emailCheck = await User.findOne({
                email
            });
            if (emailCheck)
                return res.json({
                    msg: "email already used",
                    status: false
                });
            const hashpassword = await bcrypt.hash(password.toString(), 10);

            const user = await User.create({
                email:email.toString(),
                username:username.toString(),
                password: hashpassword
            });
            delete user.password;
            return res.json({
                status: true,
                user
            });
        } catch (error) {
            next(error);
        }

}

module.exports.login = async(req, res, next) => {
    try {
        // console.log(req.body);
        const {
            username,
            password
        } = req.body;
        const user = await User.findOne({
            username
        });
        if (!user)
            return res.json({
                msg: "Username or password incorrect",
                status: false
            });
        const isPasswordVerify= await bcrypt.compare(password.toString(),user.password.toString());
        if(!isPasswordVerify)
            return res.json({
                msg: "Username or password incorrect",
                status: false
            });
        delete user.password;
        return res.json({
            status: true,
            user
        });
    } catch (error) {
        next(error);
    }

}

module.exports.getAllUsers=async(req, res, next) => {
    try{
 const users =await User.find({_id:{$ne:req.params.id}}).select([
    "email",
    "username",
    "avatarImage",
    "_id",
 ])
    
 return res.json(users);
    }catch(ex){
        next(ex);
    }
}