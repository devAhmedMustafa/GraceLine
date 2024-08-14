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
        <li className="border-2 px-6 py-4 min-w-64 rounded-lg flex flex-col justify-between gap-8">
            <div className="flex items-center gap-2">
                <i className='bx bx-chalkboard text-3xl'></i>
                <h2 className="text-lg">{document.name}</h2>
            </div>

            <div className="text-gray-500">
                <p>Layers: {document.layers.length}</p>
                <p>Created at: {document.createdAt!?.toLocaleString()}</p>
                <p>Opened at: {document.openedAt!?.toLocaleString()}</p>
            </div>

            <div className="flex justify-between">

                <button className="bg-minor px-5 py-2 rounded-md text-white font-semibold">Open</button>

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