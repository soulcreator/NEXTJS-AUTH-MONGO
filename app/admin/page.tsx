import { requireAuth } from "@/lib/requireAuth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
    const user = await requireAuth();
    if (user.role !== 'admin') {
        redirect('/profile');
    }
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500">Restricted access</p>
        </div>
    );
}