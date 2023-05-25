import React from "react"
// import ReactDOM from 'react-dom'
import Navbar from "./components/Navbar"
import Main from './components/Main'
import './style.css'

function App () {
 return (
  <div className="app">
    <Navbar />
    <Main />
  </div>
 )
}

export default App