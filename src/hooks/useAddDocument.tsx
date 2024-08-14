import { useContext } from "react";
import DocumentsContext from "../contexts/DocumentsContext";
import IDocument from "../interfaces/IDocument";


export default function useAddDocument(){

    const {documents, setDocuments} = useContext(DocumentsContext)

    function addToList(newDoc: IDocument, idx?: number){
        if (idx === undefined){
            setDocuments([...documents, newDoc])
        }
        else{
            setDocuments([...documents.slice(0, idx), newDoc, ...documents.slice(idx)])
        }
    }

    function modifyList(id: number|string, _newdoc: IDocument){
        
        setDocuments(documents.map((doc, idx) => idx === id ? doc : documents[idx] = _newdoc))

    }

    return {addToList, modifyList}
}