import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import DrawObject from "./DrawObject";

export default class Rectangular extends DrawObject{
    constructor(
        public position : vector2,
        public size : vector2,
        public color : Color,
        public strokeColor : Color,
        public strokeThickness : number,
        public radii : number[] | number
    ){
        super(position);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = this.strokeThickness;
        ctx.roundRect(this.position.x, this.position.y, this.size.x, this.size.y, this.radii);
        ctx.fill();
        ctx.stroke()
    }
}