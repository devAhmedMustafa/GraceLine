import React from "react";
import IDocument from "../../../interfaces/IDocument";
import { Link } from "react-router-dom";
import InfOnHover from "../../atoms/other/InfOnHover";
import FoldOptions, { Option } from "../other/FoldOptions";

const DocumentListItem : React.FC<{document: IDocument}> = ({document})=>{

    const deleteDoc = ()=>{
        console.log("delete");
    }

    const options : Option[] = [
        {
            label: "Delete",
            callBack: deleteDoc
        }
    ]

    return (
        <li className=" bg-white px-6 py-4 min-w-64 rounded-2xl flex flex-col justify-between gap-8">
            <div className="flex items-center gap-2">
                <i className='bx bx-chalkboard text-3xl'></i>
                <h2 className="text-lg">{document.name}</h2>
            </div>

            <div className="text-gray-500">
                <p>Layers: {document.layers?.length}</p>
                <p>Created at: {document.created_at!?.toLocaleString()}</p>
                <p>Opened at: {document.opened_at!?.toLocaleString()}</p>
            </div>

            <div className="flex justify-between">

                <Link target="_blank" to={`/graceline/${document._id}`} className="bg-primary px-5 py-2 rounded-md text-white font-semibold">Open</Link>

                <div className="flex gap-2 items-center">
                    <button>
                        <i className='bx bx-link text-3xl'></i>
                        <InfOnHover text="Copy share link"/>
                    </button>

                    <FoldOptions options={options}/>
                </div>


            </div>
        </li>
    )
}

export default DocumentListItem;