import jwt from "jsonwebtoken";
import { AuthUser } from "./types/auth";
const JWT_SECRET = process.env.JWT_SECRET!;

//todo object和any的区别以及冒号的用法
export const signToken = (payload: AuthUser): string => {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '7d'});
};

export const verifyToken = (token: string): AuthUser => {
    return jwt.verify(token, JWT_SECRET) as AuthUser;
};