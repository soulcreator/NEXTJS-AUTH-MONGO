/**
 * User data used in UI components
 * Safe to expose
 */

export type User = {
    id: string;
    email: string;
    role: 'user' | 'admin';
    createdAt: string;
    avatar?: string;
}