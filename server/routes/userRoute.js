const { register ,login,getAllUsers} = require('../controllers/usersController');

const router =require("express").Router()

router.post("/signup",register);
router.post("/signin",login);
router.get("/allusers/:id",getAllUsers);
// router.post("/setAvatar",login);
module.exports=router;