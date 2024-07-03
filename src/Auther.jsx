import { createContext, useContext } from "react"


export const AuthContext = createContext();

export const Auther = ({ children }) => {
    const GenrateToken = () => {
        const randomtoken = "AB8Cabc0D7EFGH1fghijklI2J3KLM5N7OPQRSTUVWXYZdemnopqrstuvwxyz"
        let token = ""
        for (let i = 0; i < 15; i++) {
            token += randomtoken.charAt(Math.random() * 100);
        }
        return localStorage.setItem("token",token);
    }

    return <AuthContext.Provider value={{ GenrateToken }}>
        {children}
    </AuthContext.Provider>
}

export const UseAuth = () => {
    return useContext(AuthContext);
} 