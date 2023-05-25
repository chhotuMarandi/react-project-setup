import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../logo/react-logo.png'

function Navbar () {
 return (
   <nav className='navbar-section'>
     <div className='header-section'>
       <img src={logo} alt='' />
       <h1>ReactFacts</h1>
     </div>
     <div className='navbar-list-section'>
       <ul className='navbar-list'>
         <li>React</li>
         <li>Courses</li>
         <li>Contribution</li>
       </ul>
     </div>
   </nav>
 );
}

export default Navbar