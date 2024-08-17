import logo from "@assets/images/logo.png"
import DocumentName from "../../atoms/inputs/DocumentName";
import CloudSync from "../../atoms/other/CloudSync";

const DocumentHeadline : React.FC = ()=>{



    return (
        <div className="fixed m-3 bg-white shadow-sm rounded-md px-4 py-2 flex items-center gap-3 z-50">
            <img width={35} src={logo} alt="" />
            <DocumentName/>
            <CloudSync/>
        </div>
    )
}

export default DocumentHeadline;