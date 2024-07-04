import { createContext, useContext, useState } from "react"


export const AuthContext = createContext();

export const Auther = ({ children }) => {
    const [isToken,setIsToken] = useState(localStorage.getItem("token"));

    const isLoggedIn = !!isToken;

    
    // genrate token or set token for server
    const GenrateToken = () => {
        const randomtoken = "AB8Cabc0D7EFGH1fghijklI2J3KLM5N7OPQRSTUVWXYZdemnopqrstuvwxyz"
        let token = ""
        for (let i = 0; i < 15; i++) {
            token += randomtoken.charAt(Math.random() * 100);
        }
        return localStorage.setItem("token",token);
    }

    // remove token 
    const RemoveToken = ()=>{
        setIsToken("");
        return localStorage.removeItem("token");
    }

    return <AuthContext.Provider value={{ GenrateToken, RemoveToken, isLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

export const UseAuth = () => {
    return useContext(AuthContext);
} 