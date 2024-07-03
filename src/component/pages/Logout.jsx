import { useNavigate } from "react-router-dom"
import { UseAuth } from "../../Auther";
import { useEffect } from "react";


const Logout = ()=>{
    const { RemoveToken } = UseAuth();
    const navigate = useNavigate();
    const RemoveGentoken = ()=>{
        window.alert("User Logout");
        RemoveToken();
        navigate("/login")
    }
    useEffect(()=>{
    },[RemoveToken])
    return (
        <>
            <div style={{ height: "80vh", width: "100%", display:"flex",justifyContent:"center",alignItems:"center",  flexDirection:"column", gap:"15px"}}>
                <h2>This is Logout page</h2>
                <h3>Delete Token</h3>
                <button onClick={RemoveGentoken}>Logout 😣</button>
            </div>
        </>
    )
}

export default Logout