import { useContext } from "react"
import { AuthContext, IAuthContext } from "../contexts/AuthContext"

const useAuth : any = ()=>{

    const context: IAuthContext | undefined = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used inside an AuthProvider")
    }
    return context;
}

export default useAuth;