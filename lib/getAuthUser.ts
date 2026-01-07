import { cookies, headers } from "next/headers";
import { verifyToken } from "./auth";
import { AuthUser } from "./types/auth";


export async function getAuthUser(
    source: 'cookie' | 'header' = 'cookie'
): Promise<AuthUser | null> {
    try {
        let token: string | undefined;

        if (source === 'header') {
            const authHeader = (await headers()).get('authorization');
            token = authHeader?.replace('Bearer', '');
        } else {
            token = (await cookies()).get('token')?.value;
        }
        if (!token) {
            return null;
        }

        return verifyToken(token);
    } catch {
        return null;
    }
}