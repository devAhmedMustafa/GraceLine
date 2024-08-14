import { MutableRefObject, useContext, useEffect, useRef, useState } from "react"
import Freehand from "../../../utils/draw objects/Freehand";
import SMath from "../../../utils/Math/SMath";
import BrushData from "../../../utils/DrawData/BrushData";
import LayersContext from "../../../contexts/LayersContext";
import vector2 from "../../../utils/Math/vector2";
import Color from "../../../utils/Types/Color";
import IFreehandLayer from "../../../interfaces/Layers/IFreehandLayer";
import useAddLayer from "../../../hooks/useAddLayer";

export default function Pen(){

    const {layers, setLayers} = useContext(LayersContext)

    const toolRef = useRef<HTMLDivElement>()
    const canvaRef = useRef<HTMLCanvasElement>();

    const [thickness, setThickness] = useState(2);
    const [color, setColor] = useState<Color>(Color.black);

    const addLayer = useAddLayer()

    useEffect(()=>{

        const canvas = canvaRef.current!;
        canvas.width = innerWidth;
        canvas.height = innerHeight;

        const ctx = canvas.getContext('2d')!;

        const brush = new Freehand(color, thickness);
        let brushData : BrushData | null;
        
        const tool = toolRef.current!;
        let canDraw = false;
        let init = false;
        let prev : vector2;
        const mouse : vector2 = new vector2(0, 0);

        function HandleMouseMove(e: any){
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            tool.style.left = mouse.x + 'px';
            tool.style.top = (mouse.y-20) + 'px';

            if (!init){
                brush.start(ctx, mouse.x, mouse.y);
                prev = new vector2(mouse.x, mouse.y);
            }
            else{
                if (canDraw){

                    let vf = SMath.lerp(prev, {x: mouse.x, y: mouse.y}, 0.3);

                    brushData?.addVertex(vf.x, vf.y);
                    brush.realTimeDraw(ctx, vf.x, vf.y);

                    prev = vf;

                }
            }
        }

        function HandleMouseDown(){
            canDraw = true;
            init = true;

            brushData = new BrushData({thickness: thickness, color: color})
        }
        
        function HandleMouseUp(){
            canDraw = false;
            init = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const min = brushData?.getMinVertices();
            const max = brushData?.getMaxVertices();

            const position = new vector2(min?.x!, min?.y!);

            brushData!.staticPosition = position;
            
            const size = new vector2(
                max?.x! - min?.x!,
                max?.y! - min?.y!
            )
            
            console.log(brushData)

            const brushLayer : IFreehandLayer = {
                id: layers.length,
                position: position,
                size: size,
                props: brushData!,
            }

            addLayer(brushLayer)

            brushData = null;
        }

        addEventListener('mousemove', HandleMouseMove)

        addEventListener('mousedown', HandleMouseDown)

        addEventListener('mouseup', HandleMouseUp)

        return ()=>{
            removeEventListener('mousemove', HandleMouseMove);
            removeEventListener('mousedown', HandleMouseDown);
            removeEventListener('mouseup', HandleMouseUp)
        }


    }, []);

    return(
        <div>
            <div ref={toolRef as MutableRefObject<HTMLDivElement>} className="absolute z-20">
                <i className="fa-solid fa-pen text-xl"></i>
            </div>

            <canvas className="absolute top-0 left-0 z-20" ref={canvaRef as MutableRefObject<HTMLCanvasElement>}></canvas>
        </div>
    )
}    