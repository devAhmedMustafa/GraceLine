import React from "react";
import DocumentsList from "../lists/DocumentsLists";

const DocumentsBody : React.FC<any> = ()=>{
    return (
        <div className="container-padding">
            <h1 className="text-3xl font-bold">Documents</h1>

            <div className="pt-5">
                <DocumentsList/>
            </div>

        </div>
    )
}

export default DocumentsBody