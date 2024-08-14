import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MainLayout from './components/templates/layouts/MainLayout'
import DocumentsPage from './pages/DocumentsPage'
import { useState } from 'react'
import DocumentsContext, { IDocumentsContext } from './contexts/DocumentsContext'
import IDocument from './interfaces/IDocument'


function App() {

  const [documents, setDocuments] = useState<IDocument[]>([{id: 0, name: "Untitled", layers: []}]);

  return (

    <DocumentsContext.Provider value={{documents, setDocuments}!}>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage />} />
            <Route path='/documents' element={<DocumentsPage/>}/>
          </Route>

        </Routes>
      
      </BrowserRouter>

    </DocumentsContext.Provider>

  )
}

export default App
