import { errors } from "@upstash/redis";
import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key");
        if (!success) {
            res.status(429).json({ message: "Too many Request, please try again later." });
        }

        next();
    } catch (error) {
        console.log("Rate Limiter error: ", error);
        next(error);
    }
}


export default rateLimiter;