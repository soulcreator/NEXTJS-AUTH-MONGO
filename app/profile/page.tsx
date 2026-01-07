import UserInfo from "@/components/auth/UserInfo";
import { requireAuth } from "@/lib/requireAuth";
import UserModel from '@/lib/models/User';
import { User } from '@/types/user';

export default async function ProfilePage() {
    const authUser = await requireAuth();

    const dbUser = await UserModel.findById(authUser.id);

    const user: User = {
        id: dbUser._id.toString(),
        email: dbUser.email,
        role: dbUser.role,
        createdAt: dbUser.createdAt.toISOString()
    };

    return <UserInfo user={user}/>;
}