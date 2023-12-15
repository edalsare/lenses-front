export interface User{
    userId: number;
    names: string;
    last_names: string;
    telephone: string;
    email: string
    password: string;    
    users: string;
}

export interface UserContextState {
    currentUser: User;
    loginUser: (user: User) => void;
}