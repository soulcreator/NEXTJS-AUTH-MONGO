/**
 * User data stored in JWT and request context
 * Minimal & Safe 
 */ 
export type AuthUser = {
    id: string;
    role: 'user' | 'admin';
}