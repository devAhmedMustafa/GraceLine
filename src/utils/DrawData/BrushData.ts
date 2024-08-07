import IFreehandData from "../../interfaces/DrawData/IFreehandData";
import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import LayerData from "./LayerData";

export default class BrushData extends LayerData implements IFreehandData{
    constructor(
        public type: string = "BRUSH",

        public thickness : number,
        public color : Color,
        public x : number[],
        public y : number[],
        public max : vector2,
        public min : vector2,
    ){
        super();
    }
}