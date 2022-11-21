const router = require("express").Router();


let User = require("../models/User");

router.route("/register").post(
    (req,res)=>{
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const newUser = new User({
            username,
            email,
            password
        });

        newUser.save().then(()=>{
            res.json("Registered")
        }).catch((err)=>{
            console.log(err);
        });
    }

    
)
module.exports = router;