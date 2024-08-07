import vector2 from "../Math/vector2";

export default class Styling{

    static addGrayBackground(element: HTMLElement){
        element.style.backgroundColor = "#e6e6e6";
    }

    static transparent(element: HTMLElement){
        element.style.backgroundColor = "transparent";
    }

    static addStyles(element: HTMLElement, stylesObject : any){
        Object.keys(stylesObject).forEach((key) => {
            element.style[key as any] = stylesObject[key];
        });
    }

    static setCursor(element: HTMLElement, cursorType: string){
        element.style.cursor = cursorType;
    }

    static resizeBox(element: HTMLElement, size:vector2){
        element.style.width = size.x + "px";
        element.style.height = size.y + "px";
    }

    static addBorder(element: HTMLElement, {thick, type, color} : any){
        element.style.border = thick + "px " + type + " " + color;
    }

    static addOutline(element: HTMLElement, {thick, type, color} : any){
        element.style.outline = thick + "px " + type + color;
    }
}