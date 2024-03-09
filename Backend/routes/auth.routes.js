const express=require('express');

const router=express.Router();
const {signUp,signIn,google}=require('../controllers/auth.controller')

router.post("/signup",signUp);
router.post("/signin",signIn);
router.post("/google",google);

// test api
router.get('/user',(req,res)=>{
    res.json({
        message:"hello abdullah"
    })
})


module.exports = router;