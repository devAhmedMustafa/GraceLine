import SingleDocumentContext from "../../../contexts/SingleDocumentContext";
import IDocument from "../../../interfaces/IDocument";
import { useContext, useEffect, useRef, useState } from "react";


export default function DocumentName(){

    const {document, setDocument} = useContext(SingleDocumentContext);
    const [name, setName] = useState(document.name)

    const inputRef = useRef<HTMLInputElement>()
    const labelRef = useRef<HTMLLabelElement>()

    const handleInputChange = (e: any)=>{
        const value : string = e.currentTarget.value;
        if (value.length > 40) return;
        setName(value)
    }

    const handleBlur = ()=>{
        if (name.length > 0) {
            setDocument((prevDocument: IDocument) => ({...prevDocument, name: name}))
        }
        else{
            setDocument((prevDocument: IDocument) => ({...prevDocument, name: '(untitled)'}))
            setName('(untitled)')
        }
    }

    useEffect(()=>{
        console.log(name)
        if (inputRef && labelRef){
            inputRef.current!.style.width = labelRef.current?.offsetWidth + "px";
        }
    }, [name])

    return (
        <div>
            <label ref={labelRef as any} htmlFor="doc_name" className="text-xl font-bold p-2 invisible border-[1px] absolute whitespace-nowrap">{name}</label>
            <input id="doc_name" ref={inputRef as any} onBlur={handleBlur} className="focus:border-primary focus:outline-none hover:border-neutral-300 rounded-md border-transparent border-[1px] text-xl font-bold py-1 pl-2 cursor-text" onChange={handleInputChange} value={name}/>
        </div>
    )
}