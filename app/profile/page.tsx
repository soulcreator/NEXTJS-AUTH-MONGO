import UserInfo from "@/components/auth/UserInfo";
import { requireAuth } from "@/lib/requireAuth";

export default async function ProfilePage() {
    const user = await requireAuth();
    console.log('========profilepage=========' + user.email + '==' + user.role + '==' + user.createdAt + '');


    return <UserInfo user={user}/>;
}