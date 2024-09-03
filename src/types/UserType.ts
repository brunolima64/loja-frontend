export type UserType = {
    id?: string;
    name?: string;
    email: string;
    passwordHash: string;
    state?: string;
    token?: string;
}