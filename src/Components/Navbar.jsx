import {} from 'react'
import {Link} from "react-router-dom"
import './Css/Navbar.css'

function Navbar(){
  return(
    <>
        <div className="header">
           <div className="left">
              <img className="logo"  src="./mypic.jpg" alt="Loading peofile pic"/>
              <h1>SHIVRAM</h1>
           </div>
          <div className="right">
            <Link className="ns nsh"to="/Home">Home</Link>
            <Link className="ns"to="/About">About</Link>
            <Link className="ns"to="/projects">projects</Link>
            <Link className="ns" to="/Contact">Contact</Link>
        </div>
        </div>
    </>
  )
}
export default Navbar