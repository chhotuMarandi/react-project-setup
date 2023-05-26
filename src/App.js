import React from "react"
import ReactDOM from 'react-dom'
// import Navbar from "./components/Navbar"
// import Main from './components/Main'
import './style.css'
import Contact from "./components/Contact"

function App () {

 return (
   <div className='app'>
     <Contact
       img='https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'
       name='Mr. Whiskerson'
       number='7845165542'
       mail='cat@gmail.com'
     />
     <Contact
       img='https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg'
       name='Mr. Bob'
       number='814865542'
       mail='bobmeow@gmail.com'
     />
     <Contact
       img='https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg'
       name='Mr. huskyman'
       number='6448555542'
       mail='huskyman@gmail.com'
     />
     <Contact
       img='https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_640.jpg'
       name='Mr. cutecat'
       number='7851165542'
       mail='cutecat@gmail.com'
     />
   </div>
 );
}

export default App