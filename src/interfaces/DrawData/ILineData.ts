import Color from "../../utils/Types/Color";
import ILayerData from "./ILayerData";

export default interface ILineData extends ILayerData{
    xo: number;
    yo: number;
    x: number;
    y: number;
    thickness: number;
    color: Color;
}