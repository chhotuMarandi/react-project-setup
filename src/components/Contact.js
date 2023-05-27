import React from 'react'
import ReactDOM from 'react-dom'

function Contact (props) {

  

 return (
   <div className='card'>
     <img
       src={props.img}
       alt=''
     />
     <h3>{props.name}</h3>
     <p>{props.number}</p>
     <p>{props.mail}</p>
   </div>
 );
}



export default Contact