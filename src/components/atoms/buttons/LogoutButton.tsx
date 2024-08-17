import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import InfOnHover from "../other/InfOnHover";

export default function LogoutButton(){

    const {logout} = useAuth()
    const navigate = useNavigate();

    const handleOnClick = ()=>{
        logout()
        navigate('/auth/login')
    }

    return (
        <button onClick={handleOnClick} className="size-full flex justify-center items-center text-sm rounded-full text-minor">
            <Icon icon="ant-design:logout-outlined" className="text-2xl"/>
            <InfOnHover text="Logout"/>
        </button>
    )
}