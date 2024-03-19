import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Auth(){
    const Navigate = useNavigate();
    useEffect(()=>{
        const path = window.location.pathname;
        if(path == "/admin"){
            if(!localStorage.getItem("token") || localStorage.getItem("role")!="admin"){
                //console.log("Admin Authenticate");
                Navigate("/logout")

            }

        }else if(path == "/user"){
            if(!localStorage.getItem("token") || localStorage.getItem("role")!="user"){
                //console.log("Admin Authenticate");
                Navigate("/logout");

            }

        }else{
            if(localStorage.getItem("role")=="admin"){
                Navigate("/admin");
            }else if(localStorage.getItem("role")=="user"){
                Navigate("/user");

            }else{
                Navigate("/");

            }

        }

    },[]);
    
    return(
    <>
    </>
    );

}
export default Auth;