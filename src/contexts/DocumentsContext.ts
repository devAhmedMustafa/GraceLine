import { createContext } from "react";
import IDocument from "../interfaces/IDocument";

export interface IDocumentsContext{
    documents: IDocument[];
    setDocuments: (documents: IDocument[]) => void;
}

const DocumentsContext = createContext<IDocumentsContext>({
    documents: [], 
    setDocuments(documents: IDocument[]){}
}) 

export default DocumentsContext;