import { useEffect, useRef } from "react";
import Color from "../../../utils/Types/Color";
import { FlowFieldEffect } from "../../../utils/draw objects/FlowFieldEffect";

interface FlowFieldsProps{
    width : number;
    height : number;
    colorPallete : Color[];
    numberOfParticles? : number;
    cellSize? : number;
    curve? : number;
    zoom? : number;
}

export default function FlowFields({width, height, colorPallete, numberOfParticles=10, cellSize=20, curve=0.1, zoom=0.1}:FlowFieldsProps){

    const canvasRef = useRef();

    useEffect(()=>{
        const canvas : any = canvasRef.current;
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d')!;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;



        const effect = new FlowFieldEffect(canvas.width, canvas.height, colorPallete, numberOfParticles, cellSize, curve, zoom)
        effect.init(canvas.width, canvas.height);

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            effect.render(ctx);
            requestAnimationFrame(animate);
        }

        animate();

        addEventListener('resize', () => {
            canvas.width = width;
            canvas.height = height;
            effect.init(canvas.width, canvas.height);
        });
    }, [])

    return (
        <canvas ref={canvasRef as any} className="">

        </canvas>
    )
}