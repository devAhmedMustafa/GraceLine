import IRectData from "../../interfaces/DrawData/IRectData";
import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import { LayerType } from "../Types/LayerType";
import LayerData from "./LayerData";

interface RectProps{
    size: vector2,
    color: Color,
    strokeColor: Color,
    strokeThickness: number,
    radii: number[] | number
}

export default class RectData extends LayerData implements IRectData{

    size;
    color;
    strokeColor;
    strokeThickness;
    radii;

    constructor({
        size, color, strokeColor, strokeThickness, radii
    } : RectProps){

        super(LayerType.RECT)

        this.size = size;
        this.color = color;
        this.strokeColor = strokeColor;
        this.strokeThickness = strokeThickness;
        this.radii = radii;

    }
}