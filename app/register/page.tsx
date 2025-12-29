import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <AuthCard>
            <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>
            <RegisterForm/>
        </AuthCard>
    );
}