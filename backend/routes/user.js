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

router.route("/login").post(
    (req,res)=>{
  
       const {username,password} = req.body;
        User.findOne({username: username},(err,user)=>{
            if(user){
                if(password === user.password){
                    res.send({message:"login sucess",user:user})
                }else{
                    res.send({message:"Wrong credentials"})
                }
            }
            else{
                res.send("not register")
            }
        })
        

    }
)
module.exports = router;