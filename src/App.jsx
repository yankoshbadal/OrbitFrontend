import './index.css' //just to include this in application build
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup';
import Registration from './pages/Registration'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pre_signup" element={<Signup />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
