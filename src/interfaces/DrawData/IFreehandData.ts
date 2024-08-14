import vector2 from "../../utils/Math/vector2";
import Color from "../../utils/Types/Color";
import ILayerData from "./ILayerData";

export default interface IFreehandData extends ILayerData{
    thickness: number;
    color: Color;
    x: number[];
    y: number[];
    max: vector2;
    min: vector2;
    staticPosition: vector2;
}