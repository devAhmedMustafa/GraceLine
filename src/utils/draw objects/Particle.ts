import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import DrawObject from "./DrawObject";

export default class Particle extends DrawObject{
    constructor(
        public position : vector2,
        public radius : number,
        public color : Color
    ){
        super(position)
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}