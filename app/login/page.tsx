import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <AuthCard>
            <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
            <LoginForm/>
        </AuthCard>
    );
}