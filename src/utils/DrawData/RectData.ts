import IRectData from "../../interfaces/DrawData/IRectData";
import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import LayerData from "./LayerData";

export default class RectData extends LayerData implements IRectData{
    constructor(
        public type: string = "RECTANGULAR",

        public size: vector2,
        public color: Color,
        public strokeColor: Color,
        public strokeThickness: number,
        public radii: number[]
    ){
        super()
    }
}