import ILineData from "../../interfaces/DrawData/ILineData";
import Color from "../Types/Color";
import LayerData from "./LayerData";

export default class LineData extends LayerData implements ILineData{
    constructor(
        public type: string = "LINE",

        public xo: number,
        public yo: number,
        public x: number,
        public y: number,
        public thickness: number,
        public color: Color
    ){
        super()
    }
}