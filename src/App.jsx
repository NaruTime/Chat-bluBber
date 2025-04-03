
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Loginpage'
import RegisterPage from './pages/RegisterPage'
import ChatPage from './pages/ChatPage'
import Contaus from './Comon/ContacUs'
import Videocalls from './Comon/ViedeoCalls'
function App() {


  return (
    <Router>
        <div className=''>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="chat/" element={<ChatPage />} >
         <Route path='' element={<Contaus></Contaus>}></Route>
         <Route path='v' element={<Videocalls></Videocalls>}></Route>
        </Route>

      </Routes>
        </div>
    </Router>
  )
}

export default App
