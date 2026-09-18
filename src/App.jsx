import './index.css' //just to include this in application build
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup';
import Registration from './pages/Registration'
import Radar from './pages/Radar';
import FeedPeople from './pages/FeedPeople'
import FeedPosts from './pages/FeedPosts'
import Chats from './pages/Chats'
import Requests from './pages/Requests'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pre_signup" element={<Signup />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/home" element={<Radar />} />
        <Route path="/feed/people" element={<FeedPeople />} />
        <Route path="/feed/posts" element={<FeedPosts />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
