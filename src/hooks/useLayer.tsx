import React, { MutableRefObject, ReactNode, useContext, useEffect, useRef, useState } from "react";
import DrawStateContext, { DrawTools, IDrawStateContext } from "../contexts/DrawStateContext";
import LayersContext, { ILayersContext } from "../contexts/LayersContext";
import vector2 from "../utils/Math/vector2";
import ILayerData from "../interfaces/DrawData/ILayerData";
import Transform from "../utils/Transform/Transform";
import ILayer from "../interfaces/Layers/ILayer";
import useDrag from "./useDrag";
import DrawObject from "../utils/draw objects/DrawObject";

export default function useLayer<T extends ILayerData>(layer: ILayer<T>, object: DrawObject){

    const {setDrawState} : IDrawStateContext = useContext(DrawStateContext)
    const {layers} : ILayersContext = useContext(LayersContext)
    const {setLayers} : ILayersContext = useContext(LayersContext)

    const mainRef : MutableRefObject<HTMLDivElement|undefined> = useRef()
    const canvRef : MutableRefObject<HTMLCanvasElement|undefined> = useRef()

    const [position, setPosition] = useState<vector2>(layer.position)
    const [size, setSize] = useState<vector2>(layer.size)
    const [props, setProps] = useState<T>(layer.props)

    const [selected, setSelected] = useState<boolean>(false)

    useDrag({
        mainRef: mainRef,
        canvRef: canvRef,
        selected: selected,
        setSelected: setSelected,
        position: position,
        setPosition: setPosition
    })

    // Initialize
    useEffect(()=>{
        setDrawState(DrawTools.select);
    }, [])

    // Update layer details
    function updateLayerData(){

        let layersItems : ILayer<ILayerData>[] = [...layers];
        let layerItem : ILayer<ILayerData> = layers[layer.id];
        console.log(layers)
        layerItem.position = position;
        layerItem.size = size;
        layerItem.props = props;

        layersItems[layer.id] = layerItem;
        setLayers(layersItems);
    }


    // Draw in layer
    function draw(){
        const canvas = canvRef.current!;
        const main = mainRef.current!;


        Transform.moveElement(main, position);
        
        canvas.width = size.x;
        canvas.height = size.y;
        canvas.style.zIndex = "30";

        const ctx = canvas.getContext('2d');

        object.draw(ctx!);
    }

    useEffect(()=>{
        draw()
        updateLayerData()
    }, [position, size, props])

    const renderJSX : React.FC<{children: ReactNode}> = ({children})=> {

        return (
            <div>

                <div ref={mainRef as MutableRefObject<HTMLDivElement>} className="absolute z-20">

                    <canvas ref={canvRef as MutableRefObject<HTMLCanvasElement>} onClick={()=> setSelected(true)} className="absolute z-20 bg-orange-300"></canvas>

                    {
                        selected &&

                        <>
                            <div className="flex items-center absolute -top-20 w-fit origin-center z-10 p-4 rounded-md bg-white">

                                {children}

                            </div>

                        </>
                    }

                </div>
            </div>
        )
    }

    return {
        context: {
            props: props
        },
        Layer: renderJSX
    }

}