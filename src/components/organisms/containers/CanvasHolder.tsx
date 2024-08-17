import {MutableRefObject, ReactNode, useContext, useEffect, useRef, useState } from "react"
import Particle from "../../../utils/draw objects/Particle";
import { DrawTools } from "../../../contexts/DrawStateContext";
import DrawStateContext from "../../../contexts/DrawStateContext";
import vector2 from "../../../utils/Math/vector2";
import Color from "../../../utils/Types/Color";
import useSmoothZoom from "../../../hooks/useZoom";

const CanvasHolder : React.FC<{children: ReactNode}> = ({children})=>{

    const {drawState} = useContext(DrawStateContext)

    const cellSize = 80;
    const canvasRef = useRef<HTMLCanvasElement>();

    const initialization = ()=>{

    }

    const resizeCanvas = ()=>{
        canvasRef.current!.width = window.innerWidth;
        canvasRef.current!.height = window.innerHeight;
    }

    const drawBackground = ()=>{
        if (!canvasRef.current) return;
        const ctx : CanvasRenderingContext2D = canvasRef.current!.getContext('2d')!;

        const particleRadius = 1;
        const cellsCount = Math.round(canvasRef.current!.width * canvasRef.current!.height / 20);

        const position = {x: 0, y: 0};
        for (let i = 0; i < cellsCount; i++){

            const particle = new Particle(
                new vector2(position.x, position.y), 
                particleRadius, 
                Color.gray
            );

            particle.draw(ctx);
            position.x += cellSize;
            if (position.x >= canvasRef.current!.width){
                position.x = 50;
                position.y += cellSize;
            }
        }


    }

    useEffect(()=>{

        initialization();

        resizeCanvas();
        drawBackground();
        
        addEventListener('resize', ()=>{
            resizeCanvas();
            drawBackground();
        })

    }, [])

    // Change cursor according to draw state
    useEffect(()=>{
        document.body.style.cursor = (drawState === DrawTools.select) ? 'default' : 'none';
    }, [drawState])

    return (
        <div id="main-canva" className="canvas-holder">
            <canvas id="canv" ref={canvasRef as MutableRefObject<HTMLCanvasElement>} className="bg-neutral-100"></canvas>
            {children}
        </div>

    )
}

export default CanvasHolder