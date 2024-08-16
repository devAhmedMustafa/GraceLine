import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../organisms/containers/Navbar";
import LocalStorage from '../../utils/Storage/LocalStorage'
import { arrayToMap } from '../../utils/Storage/Array'
import useFetch from '../../hooks/useFetch'
import useAuth from '../../hooks/useAuth'
import { useEffect, useState } from 'react'
import DocumentsContext, { IDocumentsContext } from '../../contexts/DocumentsContext'
import IDocument from '../../interfaces/IDocument'

const MainLayout : React.FC = ()=>{

    const [documents, setDocuments] = useState<Map<string|number, IDocument>>();

    useEffect(()=>{
        
    }, [documents])

    const {user} = useAuth()
    const {data} = useFetch('/documents/list/'+user._id)   
    
    useEffect(()=>{
        if(data){
            const map = arrayToMap(data, '_id')
            setDocuments(map)
        }
    }, [data])

    return (
        <>
        {   documents &&
            <DocumentsContext.Provider value={{documents, setDocuments}!}>
    
            <div className="flex flex-col h-full">
                <div>
                    <Navbar/>
                </div>
                
                <div className="min-h-96 flex flex-grow">
    
                    <Outlet/>
    
                </div>
            </div>
            </DocumentsContext.Provider>
        }
        </>
    )
}

export default MainLayout