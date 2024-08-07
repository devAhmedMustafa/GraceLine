import vector2 from "../../utils/Math/vector2";
import Color from "../../utils/Types/Color";
import ILayerData from "./ILayerData";

export default interface IRectData extends ILayerData{
    size : vector2;
    color : Color;
    strokeColor : Color;
    strokeThickness : number;
    radii : number [];
}