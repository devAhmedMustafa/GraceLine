import React, { useContext, useEffect, useState } from "react";
import DrawStateContext, { DrawTools } from '../contexts/DrawStateContext'
import ToolBar from '../components/organisms/containers/ToolsBar'
import CanvasHolder from '../components/organisms/containers/CanvasHolder'
import Board from '../components/organisms/containers/Board'
import Pen from '../components/molecules/tools/Pen'
import Shapes from '../components/molecules/tools/Shapes'
import { useParams } from "react-router-dom";
import IDocument from "../interfaces/IDocument";
import useTitle from "../hooks/useTitle";
import SingleDocumentContext from "../contexts/SingleDocumentContext";
import useFetch from "../hooks/useFetch";
import usePut from "../hooks/usePut";
import DocumentHeadline from "../components/organisms/containers/DocumentHeadline";

const SingleDocumentPage : React.FC = ()=>{

    const [drawState, setDrawState] = useState(DrawTools.select);

    const {id} = useParams();
    const {data, error} = useFetch("/documents/get/"+id)
    const {put, putError} = usePut("/documents/update/"+id)

    const [document, setDocument] = useState<IDocument|null>(null)

    useTitle(document?document.name:"")

    useEffect(()=>{
        if(data){
            setDocument(data)
        }
    },[data])

    useEffect(()=>{
        if (document){
            const {_id, user, created_at, ..._doc} = {...document}
            _doc.updated_at = new Date(Date.now())
            put(_doc)
        }
    }, [document])

    return (
        <div>
            <DrawStateContext.Provider value={{drawState, setDrawState}}>

                {document&& 
                <SingleDocumentContext.Provider value={{document: document as IDocument, setDocument}}>

                    <DocumentHeadline/>
                    <ToolBar/>

                    <CanvasHolder>

                                <Board>

                                {drawState === DrawTools.pen && <Pen/>}
                                {drawState === DrawTools.shapes && <Shapes/>}
                                
                                </Board>

                    </CanvasHolder>

                </SingleDocumentContext.Provider>
                }

            </DrawStateContext.Provider>
        </div>
    )
}

export default SingleDocumentPage