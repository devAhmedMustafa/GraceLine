import React, { useContext } from "react";
import DocumentsContext from "../../../contexts/DocumentsContext";
import DocumentListItem from "../../molecules/lists items/DocumentListIem";

const DocumentsList : React.FC = ()=>{

    const {documents} = useContext(DocumentsContext);

    return (
        <ul className="flex gap-4 flex-wrap">
            {Object.values(documents).map((doc, id)=> <DocumentListItem key={id} document={doc}/>)}
        </ul>
    )
}

export default DocumentsList