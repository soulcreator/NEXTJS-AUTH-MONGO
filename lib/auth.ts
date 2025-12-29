import jwt from "jsonwebtoken";
import { AuthTokenPayload } from "./types/auth";
const JWT_SECRET = process.env.JWT_SECRET!;

//todo object和any的区别以及冒号的用法
export const signToken = (payload: AuthTokenPayload): string => {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '7d'});
};

export const verifyToken = (token: string): AuthTokenPayload => {
    return jwt.verify(token, JWT_SECRET) as AuthTokenPayload;
};