import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MainLayout from './components/layouts/MainLayout'
import DocumentsPage from './pages/DocumentsPage'

import AuthLayout from './components/layouts/AuthLayout'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './contexts/AuthContext'
import SingleDocumentPage from './pages/SingleDocumentPage'

function App() {

  return (
    
    <AuthProvider>


        <BrowserRouter>

          <Routes>

            <Route path='/' element={<MainLayout/>}>
              <Route index element={<HomePage />} />
              <Route path='/documents' element={<DocumentsPage/>}/>
            </Route>

            <Route path='/graceline/:id' element={<SingleDocumentPage/>}/>
            
            <Route path='/auth' element={<AuthLayout/>}>
              <Route path='signup' element={<SignupPage/>}/>
              <Route path='login' element={<LoginPage/>}/>
            </Route>

          </Routes>
        
        </BrowserRouter>


    </AuthProvider>

  )
}

export default App
