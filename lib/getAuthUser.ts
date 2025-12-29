import { cookies, headers } from "next/headers";
import { verifyToken } from "./auth";
import User from "./models/User";

export type AuthUser = {
    _id: string;
    email: string;
    role: 'user' | 'admin';
    createdAt: string;
    avatar?: string;
};

type GetAuthUserOptions = {
    source?: 'cookie' | 'header';
};

export async function getAuthUser(
    options: GetAuthUserOptions = { source: 'cookie'}
): Promise<AuthUser | null> {
    try {
        let token: string | undefined;

        if (options.source === 'header') {
            const authHeader = (await headers()).get('authorization');
            token = authHeader?.replace('Bearer', '');
        } else {
            token = (await cookies()).get('token')?.value;
        }
        if (!token) {
            return null;
        }

        const authTokenPayload = verifyToken(token);
        
        return await User.findOne({ authTokenPayload }) as AuthUser;
    } catch {
        return null;
    }
}