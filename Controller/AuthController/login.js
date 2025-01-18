import { User } from "../../Modal/UserSchema/userSchema.js";
import { comparePassword } from "../../utils/bcrypt.js";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

       
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid user" });
        }

      
        const validUser = await comparePassword(password, user.password); 

        if (!validUser) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

    
        if (user.isBlockd) { 
            return res.status(403).json({ success: false, message: "Sorry, you are blocked" });
        }

        const token = generateToken(user.id);

        if (user.role === "admin") {
            return res.status(200).json({ success: true, message: "Admin login successfully", token, username: user.UserName, userId: user.id });
        }

        res.status(200).json({ success: true, message: "User login successfully", token, username: user.UserName, userId: user.id });

    } catch (error) {

        handleError(res, error);   
     }

    }