import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logof1 from '../images/logof1.jpg';
export default function Header() {

  const view2 = {
    height: '360px',
    width: '350px',
    marginLeft: '75%',
    borderBottom: '20px solid black', 
    position: 'fixed',
    zIndex: '3',
    backgroundColor: 'white',
    opacity: '0.9',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
    display:'block',
    paddingLeft: '30px', 
    lineHeight: '5px',
    fontWeight: '500'
  }

  const [visible, setVisible] = useState(false);
  
  return (
    <section id="nav-bar">        
        <nav className="navbar navbar-expand-lg ">    
          <img src={logof1} style={{marginLeft: '10px'}} alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span style={{marginRight:'100px', fontSize: '25px', fontWeight: '600'}} className="navbar-toggler-icon">MENU</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{marginTop: '10px', marginLeft: '0%'}}>
            <ul className="navbar-nav ml-auto" style={{textAlign: 'center'}}>
              <li className="nav-item ">                
                <Link className="nav-link" to="/">Home</Link>
              </li>            
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
                  <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
                  <li className="nav-item">
                <Link className="nav-link" to="/research">R&amp;D</Link>
              </li>
                  <li className="nav-item">
                <Link className="nav-link" to="/team">Team</Link>
              </li>
              <li>  
                <button type="button" onClick={() => setVisible(!visible)} style={{border: '0', color: '#fff !importan', padding: '2px', backgroundColor: 'yellowgreen', fontWeight: '600', color:'white'}}> Contact</button>
              </li>              
            </ul>
          </div>
        </nav>

        { visible && 
        <div id="mySidenav" className="sidenav" style={view2} >                
          <h3 style={{fontSize: '23px', color: 'yellowgreen'}}>Contact</h3><br/>
            <p>41-1/6-28, Revenue Ward-22,Block No-22,</p>
            <p>Muncipal Corporation, Krishnalanka</p>
            <p> Vijayawada, Krishna, Andhra Pradesh</p>
            <p>Pin : 520013</p>
            <p>Phone : 8688093369</p>
            <p>support@ploughit.com</p>       
            <br/><br/><br/>                          
            <img src={logof1} alt="" />         
            <br/><br/><br/><br/>
        </div>
        }

        <div className="headstyle1">
        </div>
    </section>    
  )
}
