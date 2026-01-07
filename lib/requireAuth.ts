import { redirect } from "next/navigation";
import { getAuthUser } from "./getAuthUser";
import { AuthUser } from "./types/auth";

export async function requireAuth(): Promise<AuthUser> {
    const user = await getAuthUser('cookie');
    
    if (!user) {
        redirect('/login');
    }

    return user;
}

