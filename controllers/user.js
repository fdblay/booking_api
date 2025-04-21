import { UserModel } from "../models/user";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { registerUserValidator, loginUserValidator } from "../validators/user.js";

// const registerUser = async (req, res, next) => {
//     // check if email already exists
//     const existingUser = await user.findOne({email: req.body.email});
//     if (existingUser) {
//         return res.status(400).json({error: 'Email already exists'});
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);

//     // create new user
//     const newUser = new user({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         userName: req.body.userName,
//         email: req.body.email,
//         password: req.body.password
//     });

//     await newUser.create(data);

//     // if user details is captured
//     // generate token with the user's id and secretkey in the env file
//     // set cookie with the token
//     if (user){
//         let token = jwt.sign({id: user.id}, process.env.secretKey, {
//             expiresIn: 1 * 24 * 60 * 1000,
//         });

//         res.cookie("jwt", token, {maxAge: 12})
//     }

// }

export const userRegister = async (req, res, next) => {
    try {
        //Validate user input
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            res.status(422).json(error);
        }


        // check if user does not exist
        const user = await UserModel.findOne({ email: value.email });
        if (user) {
            return res.status(409).json('User already exist!');
        }

        // Hash password
        const hashedPassword = bcryptjs.hashSync(value.password, 10);

        // save user into database
        await UserModel.create({
            ...value,
            password: hashedPassword
        });

        // send user confirmation email
        // Respond to request
        res.json('User Registered!');
    } catch (error) {
        next(error);
    }
}


export const userLogin = async(req, res, next) => {
    try {
        const {error, value} = loginUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

        const user = await UserModel.findOne({email: value.email});
    } catch (error) {
        next(error);
    }
}