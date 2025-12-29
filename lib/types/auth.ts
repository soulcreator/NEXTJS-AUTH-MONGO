export interface AuthTokenPayload {
    id: string;
    role: 'user' | 'admin';
}