import { useContext } from "react";
import { AuthContext } from "../Contexts/auth";

const UseAuth = ()=>{
    const context = useContext(AuthContext);
  return context; 
}

export default UseAuth;