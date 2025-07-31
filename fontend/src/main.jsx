import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.jsx'
import SignUp from './Pages/SignUp.jsx';
import SignIn from './Pages/SignIn.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
