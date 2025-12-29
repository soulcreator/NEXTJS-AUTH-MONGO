'use client';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full h-14 flex items-center justify-between px-6 bg-white dark:bg-zinc-900 shadow">
            <Link href='/' className="font-bold">
                AuthSystem
            </Link>
            <div className="flex items-center gap-4">
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
            </div>
            <ThemeToggle/>
        </nav>
    );
}