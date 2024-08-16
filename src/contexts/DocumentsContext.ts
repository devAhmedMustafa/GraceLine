import { createContext } from "react";
import IDocument from "../interfaces/IDocument";

export interface IDocumentsContext{
    documents: Map<string|number, IDocument>
    setDocuments: (documents: Map<string|number, IDocument>) => void;
}

const DocumentsContext = createContext<IDocumentsContext>({
    documents: new Map(), 
    setDocuments(documents: any){}
}) 

export default DocumentsContext;