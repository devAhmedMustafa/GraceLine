import { createContext } from "react";
import ILayer from "../interfaces/Layers/ILayer";
import ILayerData from "../interfaces/DrawData/ILayerData";

export interface ILayersContext{
    layers: ILayer<ILayerData>[],
    setLayers: (layers: ILayer<ILayerData>[])=> void,
}

const LayersContext = createContext<ILayersContext>({
    layers: [],
    setLayers(layers) {
        
    },
})

export default LayersContext;