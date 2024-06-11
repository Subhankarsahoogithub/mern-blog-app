import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';


export const signup=async(req,res)=>{
    const {username,email,password}=req.body;

    if(!username || !email || !password || username ==='' || email==='' || password===''){
        res.status(400).json({
            errer:"all fields are required"
        })
        return;
    }

    const hashedPassword=bcryptjs.hashSync(password,10);


    const newUser=new User(
        {
            username,
            email,
            password:hashedPassword,
        }
    );

    try {
        
        //save in database:
        await newUser.save();
        res.json({msg:"signup successfully"})
    } catch (error) {
        res.status(400).json({errror:error.message})
    }

}