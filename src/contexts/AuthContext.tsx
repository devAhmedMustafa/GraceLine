import  React, { createContext, ReactNode, useState } from "react";
import api from "../utils/Api/Axios";
import LocalStorage from "../utils/Storage/LocalStorage";

interface User{
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface IAuthContext{
    user: User|null;
    login: (identifier: string, password: string) => Promise<void>;
    logout: () => void;
    checkAuthStatus: () => Promise<void>;
    updateCredintials: (user: any)=> void;
}

export const AuthContext = createContext<IAuthContext|undefined>(undefined)

export const AuthProvider : React.FC<{children: ReactNode}> = ({children})=>{

    const [user, setUser] = useState<User|null>(LocalStorage.getObject("user"));

    const checkAuthStatus = async () => {
        try {
            const response = await api.get(`/auth/get/${user?.id}`);
            setUser(response.data.user);
        } catch (error) {
            logout();
        }
    };

    const login = async (identifier: string, password: string)=>{

        const response = await api.post(`/users/authenticate`, {
            email: identifier,
            password: password
        });

        updateCredintials(response.data);
    }

    const updateCredintials = (data: any)=>{
        setUser(data.user);
        LocalStorage.saveObject('user', data.user);
        (localStorage as any).setItem('token', data.token);
    }

    const logout = ()=>{

        setUser(null);

        if (localStorage['token']){
            (localStorage as any).removeItem('token');
            (localStorage as any).removeItem('user');
        }
    }

    return (
        <AuthContext.Provider value={{user, login, logout, checkAuthStatus, updateCredintials}}>
            {children}
        </AuthContext.Provider>
    )
}