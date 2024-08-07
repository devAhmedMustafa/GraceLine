import vector2 from "./vector2";

export default class SMath{
    static lerp(position: vector2, targetPosition: vector2, amount: number=0.2) {

        const lerped = {x: position.x, y: position.y};

        lerped.x += (targetPosition.x - position.x)*amount;
        lerped.y += (targetPosition.y - position.y)*amount;

        return lerped;
    }
}