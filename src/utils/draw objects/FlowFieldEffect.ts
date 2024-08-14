import Color from "../Types/Color";
import { AnimatedParticle } from "./AnimatedParticle";

export class FlowFieldEffect {

    width : number;
    height : number;
    particles : AnimatedParticle[] = [];
    cols = 0;
    rows = 0;
    flowField : number [] = [];

    constructor(width:number, height:number, public colorPallete: Color[], public numberOfParticles:number, public cellSize:number, public curve:number, public zoom:number) {
        this.width = width;
        this.height = height;
        
    }

    init(width:number, height:number) {
        this.width = width;
        this.height = height;
        this.particles = [];
        this.cols = Math.floor(this.width / this.cellSize);
        this.rows = Math.floor(this.height / this.cellSize);

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let angle = (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
                this.flowField.push(angle);
            }
        }

        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new AnimatedParticle(this, this.colorPallete[Math.floor(Math.random()*this.colorPallete.length)]));
        }
    }

    render(context:CanvasRenderingContext2D) {
        this.particles.forEach(p => {
            p.draw(context);
            p.update();
        });
    }
}