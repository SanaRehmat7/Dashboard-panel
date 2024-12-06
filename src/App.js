import React, { useEffect, useState } from "react"
import "./App.css"
import Footer from "./components/Footer/footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/home"

function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode"))
  }
  const [dark, setMode] = useState(getMode())
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])
  return (
    <>
      <div className={dark ? "app" : "light"}>
        <Header dark={dark} setMode={setMode} />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
