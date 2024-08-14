import React, { useContext } from "react";
import DocumentsContext from "../../../contexts/DocumentsContext";
import DocumentListItem from "../../molecules/lists items/DocumentListIem";

const DocumentsList : React.FC = ()=>{

    const {documents} = useContext(DocumentsContext);

    return (
        <ul className="flex gap-8 flex-wrap">
            {documents.map((doc, id)=> <DocumentListItem key={id} document={doc}/>)}
        </ul>
    )
}

export default DocumentsList