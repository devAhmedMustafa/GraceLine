import { useContext } from "react";
import ILayerData from "../interfaces/DrawData/ILayerData";
import ILayer from "../interfaces/Layers/ILayer";
import LayersContext from "../contexts/LayersContext";

export default function useAddLayer(){

    const {layers, setLayers} = useContext(LayersContext)

    function addToList(newLayer: ILayer<ILayerData>, idx?: number){
        if (idx === undefined){
            setLayers([...layers, newLayer])
        }
        else{
            setLayers([...layers.slice(0, idx), newLayer, ...layers.slice(idx)])
        }
    }

    return addToList
}