'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    //todo next/navigation useRouter()用法
    const router = useRouter();

    async function submit() {
        setLoading(true);
        await fetch('/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });
        // todo loading的用法
        setLoading(false);
        // todo 
        router.push('/profile');
    }
    return (
        <>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}  placeholder='Email'/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}  placeholder='密码'/>
            <button onClick={submit}>{loading ? 'Loading...' : 'Login'}</button>
        </>
    );
}