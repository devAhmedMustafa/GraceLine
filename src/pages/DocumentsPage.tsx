import React from "react";
import DocuementsSideBar from "../components/organisms/static/DocumentsSideBar";
import DocumentsBody from "../components/organisms/containers/DocumentsBody";

const DocumentsPage : React.FC = ()=>{

    return (
        <div className="divide-x-2 h-screen flex">
            
            <div className="h-full">
                <DocuementsSideBar/>
            </div>

            <div>
                <DocumentsBody/>
            </div>

        </div>
    )

}

export default DocumentsPage