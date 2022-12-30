import React from 'react'
import { Link } from 'react-router-dom';
import instagram from '../images/instagram.jpg';
import linkedin from '../images/linkedin.svg';
import youtube from '../images/youtube.svg';
import twitter from '../images/twitter.svg';
import wtsp from '../images/wtsp.png';

export default function Footer() {
  return (
    <>
    <div class="headstyle1"></div>   

    <section id="sec4">
      <div className="row">
        <div className="col-sm-4" style={{paddingLeft: '70px'}}>
          <h3 style={{fontSize: '23px'}}>Contact</h3><br/>
          <p>41-1/6-28, Revenue Ward-22,Block No-22,<br/>Muncipal Corporation, Krishnalanka<br/> Vijayawada, Krishna, Andhra Pradesh<br/>520013</p>
          <p>Phone : 8688093369</p>
          <p>support@ploughit.com</p>                  
          &nbsp;  <a href="https://instagram.com/plough.it?utm_medium=copy_link"><img src={instagram} alt="instagram" style = {{height:"25px", width:"25px"}}/></a>&nbsp;&nbsp;&nbsp; 
          &nbsp;  <a href="https://twitter.com/ItPlough?s=08"><img src={twitter} alt="twitter" style={{width:"25px",  height:"25px"}}/></a>&nbsp;&nbsp;&nbsp; 
          &nbsp;  <a href="https://youtube.com/channel/UCQUgAR-ocvADWR9QCKjrRjg"><img src={youtube} alt="youtube" style={{height:"25px", width:"25px"}}/></a>&nbsp;&nbsp;&nbsp;
          &nbsp;  <a href="https://www.linkedin.com/in/plough-it-a50107207"><img src={linkedin} alt="linkedin" style={{ height:"25px", width:"25px"}}/></a>&nbsp;&nbsp;&nbsp; 
          <br/><br/>
        </div>

        <div className="col-sm-4 aaa" style={{paddingLeft: '100px'}}>         
          <h3 style={{fontSize: '23px'}}>Quick Links</h3><br/>
          <p><Link to="/blog">Blogs</Link></p>
          {/* <p><Link to="/field">Field Visits</Link></p> */}
          <p><Link to="/gallery">Gallery</Link></p>
          <p><a href="https://ploughit.online/">Join us</a></p>
          {/* <p><Link to="/help">Help</Link> </p>             */}
        </div>

        <div className="col-sm-4" style={{paddingLeft: '70px'}} >        
          {/* <form method="post" action="message.php">
                <h3 style="font-size: 23px;">Message</h3><br/>             
                <p><input type="text" name="mesgname" placeholder="Enter your Name"  /> </p>
                <p><input type="text" name="mbl" placeholder="Enter your Mobile" /> </p>
                <p><input type="text" name="place" placeholder="Enter your Place" /> </p>
                <p><input type="text" name="msg" placeholder="Enter your Message"  /> </p>
                <button type="submit" style={{border: '0px',backgroundColor:'yellowgreen !important', color:'#fff !important'}}>Submit</button>
          </form> */}

          SEND MESSAGE

          <div className="whatsapp_float">
          <a href="https://wa.me/918688093369" target="_blank"><img src={wtsp} width="50px" className="whatsapp_float_btn" alt=".."/> </a>          
          </div>          
        </div>     
      </div> 

      <br/><br/> 

      <div className="footstyle">
          <p style={{marginBottom: '0px'}}>support@ploughit.com</p>        
      </div>

    </section>    

    </>
  );
}
