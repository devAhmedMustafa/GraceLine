import vector2 from "../Math/vector2";

export default class Transform{

    static ChangeParent(element: HTMLElement, newParent: HTMLElement){
        element.parentNode?.removeChild(element);
        newParent.appendChild(element);
    }

    static moveElement(element: HTMLElement, targetPosition: vector2){
        element.style.left = targetPosition.x + "px";
        element.style.top = targetPosition.y + "px";
    }

    static getPosition(element: HTMLElement){
        return {x: element.offsetLeft, y: element.offsetTop};
    }

    static getGlobalPosition(el: HTMLElement) {
        var rect = el.getBoundingClientRect();
        return {x:rect.left,y:rect.top};
    }

    static getDimensions(element: HTMLElement){
        return {width: element.offsetWidth, height: element.offsetHeight};
    }

}