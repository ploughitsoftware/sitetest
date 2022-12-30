import React from 'react'
import raju from '../images/raju.png';
import divya from '../images/divya.jpg';
import shilpa from '../images/shilpa.jpeg';
import dereddy from '../images/dereddy.png';


export default function Team() {
  return (
    <>
    <section id="products">
      <div className="container">
        <h1>Our Team</h1> 
        <br/>
      <div className="row">
        <div className="col-md-3 profile-pic text-center">
            <div className="img-box">
            <img src={raju} height="140px" width="120px" className="img-responsive"  style={{borderRadius: '50%'}} alt=".." />
            </div> 
            <br/>
            <h2>Venkata Raju</h2>
            <p>Founder &amp; Cheif Innovator</p>
        </div> 
        <div className="col-md-3 profile-pic text-center"> 
          <div className="img-box">
            <img src={divya} height="140px" width="120px" alt=".." className="img-responsive" style={{borderRadius: '50%'}} />
            </div> <br/>
            <h2>Divya Sai Balisetty</h2>
            <p>Director &amp; Innovator</p>
        </div> 
        <div className="col-md-3 profile-pic text-center">
          <div className="img-box">
            <img src={shilpa} height="140px" width="120px" alt=".." className="img-responsive"  style={{borderRadius: '50%'}} />
          </div> 
          <br/>
          <h2>Shilpa Vishwakarma</h2>
          <p>Managing Director</p>
        </div> 
        <div className="col-md-3 profile-pic text-center">
          <div className="img-box">
            <img src={dereddy} alt=".." height="140px" width="120px" className="img-responsive"  style={{borderRadius: '50%'}} />
            </div> 
            <br/>
            <h2>Gangadhar Dereddy</h2>
            <p>General Manager</p>
          </div> 
        </div>  
      </div>
    </section>

    <section id="products" style={{paddingBottom: '0px'}}>
      <div className="container">
      </div>
      <div>
        <center>          
          <table className="table table-bordered" style={{width:'70%'}}>
            <tr style={{backgroundColor: 'black'}}>   
              <td style={{color:'#fff', fontWeight:'600', paddingLeft:'20px'}}>Name</td>
              <td style={{color:'#fff', fontWeight:'600'}}>Expertise</td>
              <td style={{color:'#fff', fontWeight:'600'}}>Designation</td>
            </tr>
            <tr bgcolor="">
              <td  style={{paddingLeft:'20px'}}>N Venkata Raju</td>	
              <td >Biofertilizers, Aquaculture &amp; Marketing</td>
              <td style={{paddingRight:'20px'}}>Founder &amp; Cheif Innovator</td>	
            </tr>
            <tr bgcolor="">
              <td  style={{paddingLeft:'20px'}}>Divya Sai balisetty</td>	
              <td>Business Development</td>
              <td style={{paddingRight:'20px'}}>Director &amp; Innovator</td>	
            </tr>
            <tr bgcolor="">
              <td  style={{paddingLeft:'20px'}}>Shilpa vishwakarma</td>	
              <td >E-waste and wastewater treatment division</td>
              <td style={{paddingRight:'20px'}}>Managing Director</td>	
            </tr>  
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>Gangadhar Dereddy</td>	
              <td >Agriculture Marketing</td>
              <td style={{paddingRight:'20px'}}>General Manager</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>Anurag Sahu</td>	
              <td >Animation</td>
              <td style={{paddingRight:'20px'}}>Animative Director</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>Kothapalli praveena</td>	
              <td >Molecular biology, Genomics(NGS , sequencing)</td>
              <td style={{paddingRight:'20px'}}>Head Wet lab</td>	
            </tr>
            <tr bgcolor="">
            <td style={{paddingLeft:'20px'}}>K Hanumohan Reddy</td>	
            <td >Molecular Biology</td>
            <td style={{paddingRight:'20px'}}>Head Molecular biology</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>A Vijaya Saradhi Reddy</td>	
              <td >DOP</td>
              <td style={{paddingRight:'20px'}}>Head Digital Marketing</td>	
            </tr>
            <tr bgcolor="">
              <td  style={{paddingLeft:'20px'}}>M Deepika Sri Singh</td>	
              <td >Content developer</td>
              <td style={{paddingRight:'20px'}}>Creative Head</td>	
            </tr>
            <tr bgcolor="">
              <td  style={{paddingLeft:'20px'}}>Ch Rajesh</td>	
              <td >Machinary &amp; iron mouldings</td>
              <td style={{paddingRight:'20px'}}>Head workshop</td>	
            </tr>
            <tr bgcolor="">
              <td  style={{paddingLeft:'20px'}}>P Bhuvanesh</td>	
              <td >Web Data collection</td>
              <td style={{paddingRight:'20px'}}>Marketing Head</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>Ch V S N Dwaraka Dheesh</td>	
              <td >Web Data collection</td>
              <td style={{paddingRight:'20px'}}>Human Resourse Manager</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>E vidhya</td>	
              <td >Animation</td>
              <td style={{paddingRight:'20px'}}>Animative Head</td>	
            </tr>
            <tr bgcolor="">
            <td style={{paddingLeft:'20px'}}> Sai Subhash</td>	
            <td >Animal feeds and Microbiology</td>
            <td style={{paddingRight:'20px'}}>Product Development</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>Ch Ganga Raju</td>	
              <td >Machinary &amp; iron mouldings</td>
              <td style={{paddingRight:'20px'}}>Workshop Incharge</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>Prathyusha N</td>	
              <td >Content Writing</td>
              <td style={{paddingRight:'20px'}}>Content Writer</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>N Sanjana</td>	
              <td >Content Writing</td>
              <td style={{paddingRight:'20px'}}>Reviewer</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>I Satheesh Kumar</td>	
              <td >Molecular Biology</td>
              <td style={{paddingRight:'20px'}}>Reviewer</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>B Namruth</td>	
              <td >Web content</td>
              <td style={{paddingRight:'20px'}}>Web designer</td>	
            </tr>
            <tr bgcolor="">
              <td  style={{paddingLeft:'20px'}}>G Roseline</td>	
              <td >Web content</td>
              <td style={{paddingRight:'20px'}}>Web designer</td>	
            </tr>
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>M Deepika Sri Singh</td>	
              <td >Web content</td>
              <td style={{paddingRight:'20px'}}>Web designer</td>	
            </tr> 
            <tr bgcolor="">
              <td style={{paddingLeft:'20px'}}>K Prudvija</td>	
              <td >Web Data collection</td>
              <td style={{paddingRight:'20px'}}>web Maintanance</td>	
            </tr>
            <tr bgcolor="">
              <td  style={{paddingLeft:'20px'}}>S  Vineetha</td>	
              <td >Web Data collection</td>
              <td style={{paddingRight:'20px'}}>web Maintanance</td>	
            </tr>
            <tr bgcolor="">
              <td  style={{paddingLeft:'20px'}}>A Sai Sravya</td>	
              <td >Web Data collection</td>
              <td style={{paddingRight:'20px'}}>Work Developer</td>	
            </tr>
          </table>
        </center>
      </div>    
    </section>
    </>
  );
}

