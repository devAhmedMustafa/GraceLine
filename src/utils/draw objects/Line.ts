import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import DrawObject from "./DrawObject";

export default class Line extends DrawObject{
    constructor(
        public position : vector2,
        public x : number,
        public y : number,
        public thickness : number,
        public color : Color
    ){
        super(position)
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.lineWidth = this.thickness;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }
}