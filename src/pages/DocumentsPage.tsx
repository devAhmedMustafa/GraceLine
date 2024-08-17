import React from "react";
import DocuementsSideBar from "../components/organisms/static/DocumentsSideBar";
import DocumentsBody from "../components/organisms/containers/DocumentsBody";
import useTitle from "../hooks/useTitle";

const DocumentsPage : React.FC = ()=>{

    useTitle("Documents")

    return (
        <div className="divide-x-2 flex-grow z-50 flex">
            
            <div className="h-full">
                <DocuementsSideBar/>
            </div>

            <div className="bg-background min-w-full overflow-auto -z-10">
                <DocumentsBody/>
            </div>

        </div>
    )

}

export default DocumentsPage