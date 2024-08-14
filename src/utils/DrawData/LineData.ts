import ILineData from "../../interfaces/DrawData/ILineData";
import Color from "../Types/Color";
import { LayerType } from "../Types/LayerType";
import LayerData from "./LayerData";

export default class LineData extends LayerData implements ILineData{
    constructor(
        public type = LayerType.LINE,

        public xo: number,
        public yo: number,
        public x: number,
        public y: number,
        public thickness: number,
        public color: Color
    ){
        super(type)
    }
}