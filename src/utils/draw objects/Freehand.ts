import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import DrawObject from "./DrawObject";

export default class Freehand extends DrawObject{
    constructor(
        public position : vector2,
        public x : number[],
        public y : number[],
        public shift : vector2,
        public color : Color,
        public thickness : number
    ){
        super(position)
    }

    draw(ctx: CanvasRenderingContext2D): void {
        for (let i = 0; i < this.x.length; i++){
            ctx.lineTo(this.x[i]-this.shift.x, this.y[i]-this.shift.y);
        }
        ctx.stroke();
    }

    addVertex(x: number, y: number){
        this.x.push(x);
        this.y.push(y);
    }

    realTimeDraw(ctx: CanvasRenderingContext2D, x: number, y: number){
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}