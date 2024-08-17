import React, { LegacyRef, MutableRefObject, useContext, useEffect, useRef } from "react"
import styles from "./ToolBar.module.css"
import DrawStateContext from "../../../contexts/DrawStateContext"
import { ColorIndexes } from "../../../utils/Types/Color"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

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
            <ul ref={listRef as MutableRefObject<HTMLUListElement>} className={"flex flex-col text-xl bg-white rounded-md w-fit border-2 p-2 text-gray-800 gap-4 " + styles.toolslist}>
                <li><Icon icon="basil:cursor-outline"/></li>
                <li><Icon icon="akar-icons:pencil"/></li>
                <li><Icon icon="fluent:shapes-28-regular"/></li>
                <li><Icon icon="uil:line-alt"/></li>
                <li><Icon icon="iconoir:trash"/></li>

            </ul>
        </div>
    )
}

export default ToolBar;