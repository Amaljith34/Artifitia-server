import { handleError } from "../utils/handleError.js"

export const trycatch=(controller)=>{
    return async(req,res,next)=>{
        try {
            await controller(req,res,next)
        } catch (error) {
            return handleError
        }
    }
}