import { useContext } from "react";
import DocumentsContext from "../contexts/DocumentsContext";
import IDocument from "../interfaces/IDocument";


export default function useAddDocument(){

    const {documents, setDocuments} = useContext(DocumentsContext)

    function addToList(newDoc: IDocument){
        setDocuments({...documents, [newDoc._id]: newDoc})
    }

    function modifyList(id: number|string, _newdoc: IDocument){
        
        setDocuments({...documents, [id]: _newdoc})

    }

    return {addToList, modifyList}
}