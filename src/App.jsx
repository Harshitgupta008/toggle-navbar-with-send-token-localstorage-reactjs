import {  Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar.jsx"
import Home from "./component/pages/Home.jsx"
import About from "./component/pages/About.jsx"
import Contact from "./component/pages/Contact.jsx"
import Login from "./component/pages/Login.jsx"
import Register from "./component/pages/Register.jsx"
import Logout from "./component/pages/Logout.jsx"
import Footer from "./component/Footer.jsx"
function App() {

  return (
    <>
     
        <div className="app-container">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
          <Footer />
        </div>
     
    </>
  )
}

export default App
