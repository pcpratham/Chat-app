import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
// lazy is used for dynamic importing
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(()=>import("./pages/NotFound"));


let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <ProtectRoute user={user}>
            <Home />
          </ProtectRoute>
        } />
      
        <Route path="/login" element={<ProtectRoute redirect="/" user={!user}>
          <Login />
        </ProtectRoute>} />
      
        <Route path="/chat/:chatId" element={<ProtectRoute user={user}>
          <Chat />
        </ProtectRoute>} />
      
        <Route path="/groups" element={<ProtectRoute user={user}>
          <Groups />
        </ProtectRoute>} />
        
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App