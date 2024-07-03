import "./Page.css"
import { UseAuth } from "../../Auther"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const { GenrateToken } = UseAuth();
    const navigate = useNavigate();
    const LoginGentoken = ()=>{
        GenrateToken();
        navigate("/home")

    }
    useEffect(()=>{

    },[GenrateToken])
    return (
        <>
            <div style={{ height: "80vh", width: "100%", display:"flex",justifyContent:"center",alignItems:"center" , flexDirection:"column", gap:"15px"}}>
                <h2>This is Login page</h2>
                <button onClick={LoginGentoken}>Random Login</button>
            </div>
        </>
    )
}

export default Login