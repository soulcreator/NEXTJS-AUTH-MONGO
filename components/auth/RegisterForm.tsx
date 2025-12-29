'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function submit() {
        setError('');
        setLoading(true);

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password})
        });

        setLoading(false);

        if(!res.ok) {
            setError('Registration failed');
            return;
        }

        router.push('/login');
    }

    return (
        <div className="space-y-3">
            <input type="text" className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" className="input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button className="btn w-full" onClick={submit} disabled={loading}>
                {loading ? 'Creating...' : 'Register'}
            </button>
        </div>
    );   
}