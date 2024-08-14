import IFreehandData from "../../interfaces/DrawData/IFreehandData";
import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import { LayerType } from "../Types/LayerType";
import LayerData from "./LayerData";

interface BrushProp{

    thickness : number,
    color : Color,
    x? : number[],
    y? : number[],
    max? : vector2,
    min? : vector2,
    staticPosition?: vector2;
}

export default class BrushData extends LayerData implements IFreehandData{

    thickness!: number;
    color!: Color;
    x!: number[];
    y!: number[];
    max!: vector2;
    min!: vector2;
    staticPosition: vector2;

    constructor({
        thickness, color, x = [], y = [], max, min, staticPosition = new vector2(0, 0)
    } : BrushProp){

        super(LayerType.FREEHAND);

        this.thickness = thickness;
        this.color = color;
        this.x = x;
        this.y = y;
        this.max = max!;
        this.min = min!;
        this.staticPosition = staticPosition;
    }

    addVertex(x: number, y: number){
        this.x.push(x);
        this.y.push(y);
    }

    getMinVertices(){
        this.min = new vector2(Math.min(...this.x), Math.min(...this.y));
        return this.min;
    }

    getMaxVertices(){
        this.max = new vector2(Math.max(...this.x), Math.max(...this.y));
        return this.max
    }
}