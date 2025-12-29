export type User = {
    _id: string;
    email: string;
    role: 'user' | 'admin';
    createdAt: string;
    avatar?: string;
}