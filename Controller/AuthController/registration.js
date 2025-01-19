import { signUpValidation } from "../../Middleware/signUpvalidation.js";
import { User } from "../../Modal/UserSchema/userSchema.js";
import { hashedPassword } from "../../utils/bcrypt.js";
import { handleError } from "../../utils/handleError.js";

export const signup=async(req,res)=>{
   
        const {name,email,password}=req.body
        const existingUser=await User.findOne({email})
        if(existingUser){
            return res.status(400).json({success:false,message:"Email already exists..."})
        }
        const validatedUser=await signUpValidation.validateAsync({name,email,password})
        const hashPassword=await hashedPassword(password)

        const newUser=new User({
            email:validatedUser.email,
            name:validatedUser.name,
            password:hashPassword
            
        })
        await newUser.save()
        res.status(200).json({success:true,message: "User registered successfully!",data: newUser})
    
}


