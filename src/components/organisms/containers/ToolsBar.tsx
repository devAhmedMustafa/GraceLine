import React, { LegacyRef, MutableRefObject, useContext, useEffect, useRef } from "react"
import styles from "./ToolBar.module.css"
import DrawStateContext from "../../../contexts/DrawStateContext"
import { ColorIndexes } from "../../../utils/Types/Color"

type ListRefObject = MutableRefObject<HTMLUListElement|undefined>

const ToolBar : React.FC = ()=>{

    const listRef : ListRefObject = useRef<HTMLUListElement>()

    const {drawState, setDrawState} = useContext(DrawStateContext);

    useEffect(()=>{
        const list = listRef.current;

        const toolSelected : any = list?.children[drawState];

        for (let i = 0; i < list?.children.length!; i++){

            if (i == drawState) continue;

            list?.children[i].classList.remove('activated-tool');
            (list?.children[i] as any).style.backgroundColor = "transparent";
        }

        toolSelected.style.backgroundColor = ColorIndexes[drawState];
        toolSelected.classList.add('activated-tool')        

    }, [drawState])

    useEffect(()=>{
        const childs = listRef.current!.children;
        for (let i = 0; i < childs.length; i++){
            childs[i].addEventListener('click', ()=>{
                setDrawState(i);
            })
        }
    }, [])

    return (
        <div className="flex gap-1 justify-center items-center fixed cursor-default z-[100] top-2 right-2">
            <ul ref={listRef as MutableRefObject<HTMLUListElement>} className={"flex flex-col text-xl bg-white rounded-full w-fit border-2 px-2 py-3 text-gray-800 gap-4 " + styles.toolslist}>
                <li><i className="fa-solid fa-arrow-pointer"></i></li>
                <li><i className="fa-solid fa-pen"></i></li>
                <li><i className="fa-solid fa-shapes"></i></li>
                <li><i className="fa-solid fa-grip-lines-vertical"></i></li>
                <li><i className="fa-solid fa-trash"></i></li>

            </ul>
        </div>
    )
}

export default ToolBar;