import { useNavigate } from "react-router-dom";
import React from "react";
class Auth extends React.Component{
    Navigate = useNavigate();
    componentDidUpdate(){
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

    }
   
  

}
export default Auth;