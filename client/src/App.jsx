import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Groups from "./pages/Groups"
import Events from "./pages/Events"

function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Profile/" element={<Profile />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
    </Router>
  )
}

export default App
