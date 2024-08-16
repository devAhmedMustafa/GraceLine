import { createContext } from "react";
import IDocument from "../interfaces/IDocument";

export interface ISingleDocumentContext{
    document: IDocument;
    setDocument: (doc: IDocument)=>void
}

const SingleDocumentContext = createContext<ISingleDocumentContext>({
    document: {_id: "", layers: [], name: ""},
    setDocument: ()=>{}
})

export default SingleDocumentContext;