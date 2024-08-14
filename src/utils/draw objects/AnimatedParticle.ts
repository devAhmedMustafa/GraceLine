import vector2 from "../Math/vector2";
import Color from "../Types/Color";
import { FlowFieldEffect } from "./FlowFieldEffect";

export class AnimatedParticle {

    effect : FlowFieldEffect;
    maxLength : number = 2;
    history : vector2[] = [];
    color : Color = Color.black;
    timer : number = this.maxLength*2;
    angle:number = 0;
    x:number = 0;
    y:number = 0;
    speedX:number = 0;
    speedY:number = 0;
    speedModifier : number = 0;
    thickness : number = 2;

    constructor(effect:FlowFieldEffect, color:Color) {
        this.effect = effect;
        this.maxLength = Math.floor(Math.random()*1000+100);
        this.color = color;
        this.reset()
    }

    draw(context : CanvasRenderingContext2D) {
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        
        for (let i = 1; i < this.history.length; i++) {
            context.lineTo(this.history[i].x, this.history[i].y);
        }

        context.strokeStyle = this.color;

        context.lineWidth = this.thickness;
        context.stroke();

        context.beginPath();
        context.arc(this.x, this.history[this.history.length-1].y, 4, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();

    }

    update() {
        this.timer--;
        if (this.timer > 0) {
            let x = Math.floor(this.x / this.effect.cellSize);
            let y = Math.floor(this.y / this.effect.cellSize);
            let index = y * this.effect.cols + x;
            this.angle = this.effect.flowField[index];

            this.speedX = Math.cos(this.angle);
            this.speedY = Math.sin(this.angle);
            
            this.x += this.speedX * this.speedModifier;
            this.y += this.speedY * this.speedModifier;

            this.history.push(new vector2(this.x, this.y))

            if (this.history.length > this.maxLength){
                this.history.shift();
            }

        } else {
            this.reset();
        }
    }

    reset() {
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.speedModifier = Math.random() * 5 + 1;
        this.maxLength = Math.floor(Math.random() * 1000 + 100);
        this.timer = this.maxLength*2;
        this.history = [{ x: this.x, y: this.y }];
    }
}
