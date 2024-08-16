import { useContext, useEffect } from "react";
import useAddDocument from "../../../hooks/useAddDocument"
import IDocument from "../../../interfaces/IDocument";
import DocumentsContext from "../../../contexts/DocumentsContext";
import usePost from "../../../hooks/usePost";
import useAuth from "../../../hooks/useAuth";

export default function AddDocumentButton(){

    const {documents} = useContext(DocumentsContext)
    const {addToList} = useAddDocument();
    const {user} = useAuth()

    const {post, data} = usePost("documents/add")

    function addDocuemnt(){

        
        const _doc : IDocument = {
            name: "Untitled" + Object.keys(documents).length,
        }
        
        post({user: user._id,..._doc})

    }

    useEffect(()=>{
        if(data){
            addToList(data)
        }
    }, [data])

    return (
        <button onClick={addDocuemnt} className="bg-minor rounded-lg text-white font-bold px-12 py-3 shadow-2xl text-xl flex items-center gap-2"><i className='bx bx-plus font-extrabold'></i>New</button>
    )
}