import { useRef, useState, useEffect, createElement, useContext, MutableRefObject } from "react";
import LayersContext from "../../contexts/LayersContext";
import RectData from "../../utils/DrawData/RectData";
import useAddLayer from "../../hooks/useAddLayer";
import IRectLayer from "../../interfaces/Layers/IRectLayer";
import vector2 from "../../utils/Math/vector2";
import Color from "../../utils/Types/Color";

export default function Shapes(){

    const toolRef = useRef<HTMLElement>();
    const frameRef = useRef<HTMLElement>();

    const {layers, setLayers} = useContext(LayersContext)
    const addLayer = useAddLayer()

    useEffect(()=>{

        //#region Initializations
        
        const tool = toolRef.current!;
        const mouse = {x: 0, y: 0};
        const start = {x: 0, y: 0};

        let isDrawing = false;
        let isSnapping = false;
        let currentOutline : HTMLElement | null;
        let radius = 0;

        function createOutline(){
            currentOutline = document.createElement('div');
            currentOutline.style.position = 'absolute';
            currentOutline.style.border = `solid 2px #4a9fe1`;
            currentOutline.style.transformOrigin = '0 0';

            frameRef.current?.appendChild(currentOutline)
        }

        // #endregion

        // #region Handle on mouse move

        function HandleMouseMove(e: any){
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            tool.style.left = (mouse.x-10) + 'px';
            tool.style.top = (mouse.y-15) + 'px';

            if (isDrawing){

                if (start.y > mouse.y && start.x > mouse.x){
                    currentOutline!.style.transform = 'rotateX(180deg) rotateY(180deg)';
                }
    
                else if (start.x > mouse.x){
                    currentOutline!.style.transform = 'rotateY(180deg)';
                }
    
                else if (start.y > mouse.y){
                    currentOutline!.style.transform = 'rotateX(180deg)';
    
                }
                
                else{
                    currentOutline!.style.transform = 'rotate(0deg)';
                }
    
                currentOutline!.style.top = `${start.y}px`
                currentOutline!.style.left = `${start.x}px`
                
                if (isSnapping){
                    mouse.y = mouse.x - start.x + start.y
                }
                
                currentOutline!.style.width = `${Math.abs(mouse.x-start.x)}px`;
                currentOutline!.style.height = `${Math.abs(mouse.y-start.y)}px`;

            }
        }

        window.addEventListener('mousemove', HandleMouseMove)

        // #endregion

        // #region Handle on mouse down

        function HandleMouseDown(){
            start.x = mouse.x;
            start.y = mouse.y;

            createOutline();

            isDrawing = true;
        }

        window.addEventListener('mousedown', HandleMouseDown)

        // #endregion

        // #region Dimensions Snapping
        addEventListener('keydown', (e)=>{
            if (e.key === 'Shift'){
                isSnapping = true;
            }
        })

        addEventListener('keyup', (e)=>{
            if (e.key === 'Shift'){
                isSnapping = false;
            }
        })
        // #endregion

        // #region ControlRadius

        addEventListener('wheel', (e)=>{
            if (!isDrawing) return;
            if (e.deltaY <= 0){
                radius += 10;
            } else {
                radius = Math.max(0, radius - 10);
            }
            currentOutline!.style.borderRadius = `${radius}px`
        })

        // #endregion

        // #region Handle on mouse up

        function HandleMouseUp(){
            isDrawing = false;

            const size = new vector2(Math.abs(mouse.x - start.x), Math.abs(mouse.y - start.y))
            
            const newRect = new RectData({
                size: size,
                color: Color.black,
                strokeColor: Color.gray,
                strokeThickness: 1,
                radii: radius,
            })

            const layer : IRectLayer = {
                id: layers.length,
                position: new vector2(Math.min(start.x, mouse.x), Math.min(start.y, mouse.y)),
                size: size,
                props: newRect,
            }

            setLayers([...layers, layer])

            currentOutline?.remove();
            currentOutline = null;
        }

        addEventListener('mouseup', HandleMouseUp);

        // #endregion

        return ()=>{
            removeEventListener('mousemove', HandleMouseMove);
            removeEventListener('mousedown', HandleMouseDown);
            removeEventListener('mouseup', HandleMouseUp);
        }

    }, []);

    return(
        <div ref={frameRef as any} className="z-20">

            <div ref={toolRef as any} className="absolute z-20">
                <i className="fa-solid fa-plus text-2xl font-thin"></i>
            </div>
        </div>
    )
}