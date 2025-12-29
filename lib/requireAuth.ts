import { redirect } from "next/navigation";
import { getAuthUser } from "./getAuthUser";

export type  AuthUser = {
    _id: string;
    email: string;
    role: 'user' | 'admin';
    createdAt: string;
    avatar?: string;
}

export async function requireAuth() {
    const user = await getAuthUser({source: 'cookie'}) as AuthUser;
    
    // console.log('========requireAuth=========' + user.email + '==' + user.role + '==' + user.createdAt + '');
    if (!user) {
        redirect('/login');
    }

    return user;
}

