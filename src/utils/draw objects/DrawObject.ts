import vector2 from "../Math/vector2";

export default abstract class DrawObject{

    constructor(public position : vector2){}

    abstract draw(ctx : CanvasRenderingContext2D) : void;
    
}