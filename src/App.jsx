import { Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar.jsx"
import Home from "./component/pages/Home.jsx"
import About from "./component/pages/About.jsx"
import Contact from "./component/pages/Contact.jsx"
import Login from "./component/pages/Login.jsx"
import Register from "./component/pages/Register.jsx"
import Logout from "./component/pages/Logout.jsx"
import Footer from "./component/Footer.jsx"
import Error from "./component/pages/Error.jsx"
import { UseAuth } from "./Auther.jsx"
function App() {
  const { isLoggedIn } = UseAuth();
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
            {
              !isLoggedIn ?
                <>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </>
                :

                <Route path="/logout" element={<Logout />} />
            }
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
