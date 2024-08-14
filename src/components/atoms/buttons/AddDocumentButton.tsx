import { useContext } from "react";
import useAddDocument from "../../../hooks/useAddDocument"
import IDocument from "../../../interfaces/IDocument";
import DocumentsContext from "../../../contexts/DocumentsContext";

export default function AddDocumentButton(){

    const {documents} = useContext(DocumentsContext)
    const {addToList} = useAddDocument();

    function addDocuemnt(){
        const _doc : IDocument = {
            id: documents.length,
            name: "Untitled" + documents.length,
            layers: [],
            createdAt: new Date(Date.now()),
            openedAt: new Date(Date.now()),
        }
        addToList(_doc)
    }

    return (
        <button onClick={addDocuemnt} className="bg-accent solid-shadow-blue rounded-sm text-white font-bold px-16 py-3 text-xl flex items-center gap-2"><i className='bx bx-plus font-extrabold'></i>New</button>
    )
}