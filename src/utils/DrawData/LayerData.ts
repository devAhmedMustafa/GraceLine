import ILayerData from "../../interfaces/DrawData/ILayerData";
import { LayerType } from "../Types/LayerType";


export default abstract class LayerData implements ILayerData{
    constructor(
        public type : LayerType
    ){

    }
}