import { createContext, MutableRefObject } from "react";
import vector2 from "../utils/Math/vector2";
import React from "react";

export interface ILayerContext{
    mainRef: MutableRefObject<any>;
    canvRef: MutableRefObject<any>;
    selected: boolean;
    setSelected: (s: boolean)=>void;
    position: vector2;
    setPosition: (v: vector2)=>void;
}

const LayerContext = createContext<ILayerContext>({
    mainRef: React.createRef(),
    canvRef: React.createRef(),
    selected: false,
    setSelected: (_: boolean)=>{},
    position: new vector2(0, 0),
    setPosition: (_: vector2)=>{},
})

export default LayerContext;