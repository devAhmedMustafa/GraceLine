import { useEffect, useContext } from "react";
import Styling from "../utils/Styling/Styling";
import DrawStateContext, {DrawTools} from "../contexts/DrawStateContext";
import Transform from "../utils/Transform/Transform";
import vector2 from "../utils/Math/vector2";
import LayerContext, { ILayerContext } from "../contexts/LayerContext";


export default function useDrag({mainRef, canvRef, selected, setSelected, setPosition}:ILayerContext){

    const {drawState} = useContext(DrawStateContext);

    useEffect(()=>{
        if (drawState == DrawTools.select){
            Styling.setCursor(canvRef.current, 'move');
        }
        else{
            Styling.setCursor(canvRef.current, 'none');
        }

    }, [drawState])

    // Add Listeners
    useEffect(()=>{

        let canDrag = false;
        const offset : vector2 = {x: 0, y: 0}
        const mouse : vector2 = {x: 0,y: 0}
        let pos = Transform.getPosition(mainRef.current);

        const moveCanvas = (e: any)=>{

            mouse.x = e.clientX;
            mouse.y = e.clientY;

            if (canDrag){

                setPosition({
                    x: mouse.x + (pos.x - offset.x),
                    y: mouse.y + (pos.y - offset.y)
                })
            }
        }

        const enableDragging = ()=>{
            if (!selected) return;

            const pad = {x: 20, y: 20};

            const dimenstions = Transform.getDimensions(canvRef.current);
            pos = Transform.getPosition(mainRef.current);
            
            if (
                mouse.x > pos.x+pad.x && mouse.x < dimenstions.width + pos.x -pad.x &&
                mouse.y > pos.y+pad.y && mouse.y < dimenstions.height + pos.y - pad.y
            ){
                canDrag = true;
                offset.x = mouse.x;
                offset.y = mouse.y;
            }
            
        }
        const disableDraggin = ()=>{
            if (!selected) return;
            canDrag = false;
        }

        addEventListener('mousemove', moveCanvas);
        addEventListener('mousedown', enableDragging)
        addEventListener('mouseup', disableDraggin)
        addEventListener('click', (e: any)=>{
            if (e.target.tagName == 'CANVAS' && e.target != canvRef.current){
                setSelected(false)
            }
        })

        return ()=>{
            removeEventListener('mousemove', moveCanvas);
            removeEventListener('mousedown', enableDragging)
            removeEventListener('mouseup', disableDraggin)
        }

    }, [selected])
}