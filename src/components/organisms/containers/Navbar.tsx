import React from "react";
import logo from "@assets/images/logo.png"
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import LogoutButton from "../../atoms/buttons/LogoutButton";

const Navbar : React.FC = ()=>{

    const {user} = useAuth()

    return (
        <nav className="w-full bg-neutral-900 px-10 flex items-center justify-between overflow-hidden">

            <div className="flex items-center text-primary relative">
                <img width={50} className="absolute -rotate-[30deg]" src={logo} alt="graceline_logo" />
                <div className="size-14"></div>
                <h1 className="font-hand text-2xl font-bold z-20 selection:bg-none cursor-default">GraceLine</h1>
            </div>

            <div className="flex flex-row-reverse items-center gap-3 text-primary">

                <LogoutButton/>

                <Link to='/'>
                    {/* <i className='bx bxs-user-circle text-4xl opacity-85'></i>
                     */}

                     <div className="rounded-full bg-primary text-neutral-950 font-extrabold text-2xl size-10 flex justify-center items-center">
                        {user.name[0]}
                     </div>
                </Link>
                
                <Link to="/">
                    <i className='bx bx-bell text-xl opacity-70'></i>
                </Link>

                <Link to="/">
                    <i className='bx bx-help-circle text-xl opacity-70'></i>
                </Link>

            </div>

        </nav>
    )
}

export default Navbar;