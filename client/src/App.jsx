import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Profile/" element={<Profile />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Events" element={<Events />} />v
      </Routes>
      
      
    </>
  )
}

export default App
