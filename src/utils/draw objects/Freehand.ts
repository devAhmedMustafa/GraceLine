import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import DrawObject from "./DrawObject";

export default class Freehand extends DrawObject{
    constructor(
        public color : Color,
        public thickness : number,
        public x : number[] = new Array<number>,
        public y : number[] = new Array<number>,
        public shift : vector2 = new vector2(0, 0),
        public position : vector2 = new vector2(0, 0),
    ){
        super(position)
    }

    start(ctx: CanvasRenderingContext2D, xo: number, yo: number){

        this.position.x = xo - this.shift.x;
        this.position.y = yo - this.shift.y;

        ctx.beginPath();
        ctx.lineWidth = this.thickness;
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.position.x, this.position.y);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();

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