import React from "react";
import logo from "@assets/images/logo.png"
import { Link } from "react-router-dom";

const Navbar : React.FC = ()=>{
    return (
        <nav className="w-full bg-neutral-900 px-10 py-4 flex items-center justify-between overflow-hidden">

            <div className="flex items-center gap-4 text-primary relative">
                <img width={80} className="absolute -rotate-[30deg]" src={logo} alt="graceline_logo" />
                <div className="size-14"></div>
                <h1 className="font-hand text-4xl font-bold z-20 selection:bg-none cursor-default">GraceLine</h1>
            </div>

            <div className="flex flex-row-reverse items-center gap-3 text-primary">

                <Link to='/'>
                    <i className='bx bxs-user-circle text-5xl opacity-85'></i>
                </Link>
                
                <Link to="/">
                    <i className='bx bx-bell text-2xl opacity-70'></i>
                </Link>

                <Link to="/">
                    <i className='bx bx-help-circle text-2xl opacity-70'></i>
                </Link>

            </div>

        </nav>
    )
}

export default Navbar;