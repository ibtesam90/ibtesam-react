import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./assets/components/Header"
import Home from "./assets/components/Home"
import Projects from "./assets/components/Projects"
import Education from "./assets/components/Education"
import Publication from "./assets/components/Publication"
import Experiences from "./assets/components/Experience"
import Contact from "./assets/components/Contact"
import Footer from "./assets/components/Footer"

function App() {

  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Header />
        <div className="content">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/publications" element={<Publication />} />
              <Route path="/experience" element={<Experiences />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
          <Footer></Footer>
      </Router>
    </div>
    </>
  )
}

export default App
