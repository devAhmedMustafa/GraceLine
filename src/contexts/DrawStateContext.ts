import { createContext } from "react";

export const enum DrawTools {
    select = 0,
    pen = 1,
    shapes = 2,
    liner = 3,
    clear = 4
}

export interface IDrawStateContext{
    drawState: DrawTools;
    setDrawState: (drawState: DrawTools) => void;
}

const DrawStateContext = createContext<IDrawStateContext>({drawState: DrawTools.select, setDrawState() {}})

export default DrawStateContext;