const { exits } = require("./user.model");
const User = require("./user.model");
const bcrypt = require(bcrypt);
const jwt =require("jsonwebtoken")

const generateToken = (user) => {
    const token = jwt.sign({id: user._id, email: user.email},
        "88fdec618371e7e2f52d3adc7946f7a9f4f20c295a5b52df88ff48dd03541b56",
        {
           expiresIn: "1h"
        }
        );
        return {
           token,
           user,
        }
}

exports.register = async (req, res) =>{
    const {email, password} = req.body;
    
    const emailExists = await User.findOne({email});
    if (emailExists) {
        return  res.status(400).json({Error: "email already in use"});
    };

    const user = await User.create({...req.body});

    res.status(201).json({user})

};

exports.register = async (req, res) => {
    const {email, password} = req.body;
    const emailExists = await User.findOne({email});
    if (emailExists) {
        return res.status(400).json({error: "Email is already exists"});

        // Hash the password
        // method 1
        // const salt = await bcrypt.genSalt(12)
        // const hashedPassword = await bcrypt.hash(password, salt)
        
         //method 2
         const hashedPassword = await bcrypt.hash(password, 12);

         const user = await User.create({
            ...req.body,
            password: hashedPassword,
         });
        
       res.status(200).json({ returnUser })
         res.status(201).json(({user}));
    };

    exports.login = async (req, res) => {
        const {email, password} = req.body;
        
        let user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({msg: "Invalid credentials"});
        }

        // check password
        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch) {
            return res.status(400).json({user});
        }
        }
        if (!isMatch){
            return res.status(400).json(msg, "Invalid credentials");
        }

        //
        const token = generateToken(user)
        
        res.status(200).json({ returnUser })
    }