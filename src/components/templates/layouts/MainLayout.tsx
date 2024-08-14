import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../organisms/containers/Navbar";

const MainLayout : React.FC = ()=>{
    return (
        <div className="bg-white">
            <div>
                <Navbar/>
            </div>
            
            <div className="min-h-96">

                <Outlet/>

            </div>
        </div>
    )
}

export default MainLayout