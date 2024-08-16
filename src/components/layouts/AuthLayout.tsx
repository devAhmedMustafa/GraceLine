import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import FlowFields from "../molecules/animated/FlowFields"
import Color from "../../utils/Types/Color";
import logo from "@assets/images/logo.png"

const AuthLayout : React.FC = ()=>{

    const [flowField] = useState({
        width: innerWidth,
        height: innerHeight,
        colorPallete: [Color.primary, Color.saturatedOrange],
        numberOfParticles: 17,
        cellSize: 1,
        curve: 0.9,
        zoom: 0.1
    })

    return(
        <div className="flex h-screen justify-evenly flex-col items-center pb-36">

            <div className="bg-background flex items-center gap-4 text-5xl font-bold text-primary selection:bg-none cursor-default">
                <p className="font-hand">Grace</p>
                <img className="solid-shadow-gray" width={70} src={logo} alt="" />
                <p className="font-hand">Line</p>
            </div>

            <div className="absolute -z-10 top-0 left-0 shadow-xl w-fit bg-background">
                <FlowFields width={flowField.width} height={flowField.height} colorPallete={flowField.colorPallete} numberOfParticles={flowField.numberOfParticles} cellSize={flowField.numberOfParticles} zoom={flowField.zoom} curve={flowField.curve}/>
            </div>
            
            <Outlet/>

        </div>
    )
}

export default AuthLayout