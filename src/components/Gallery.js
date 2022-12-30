import React from 'react'

import img3 from '../images/3.jpg';
import g6 from '../images/g6.jpeg';
import g2 from "../images/g2.jpeg";
import g8 from "../images/g8.jpeg";
import g5 from "../images/g5.jpeg";
import g1 from "../images/g1.jpeg";

export default function Gallery() {
  return (
    <>
    <section id="products" style={{paddingBottom: '0px'}}>
        <div className="container">
            <h1>Gallery</h1> 
            <img src={g1} height="70%" width="100%" alt=".." />
            <div className="row" style={{paddingTop: '10px'}}>
                <div className="col-sm-6" style={{paddingLeft: '0px'}}>
                    <img src={g5} height="100%" width="100%" alt=".." /> 
                </div>
                <div className="col-sm-6" style={{paddingLeft: '0px'}}>
                    <img src={g8} height="100%" width="100%" alt=".." /> 
                </div>
            </div>
            <div className="row" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <div className="col-sm-4" style={{paddingLeft:"0px"}} >
                    <img src={g2} height="100%" width="100%" alt=".." /> 
                </div>
                <div className="col-sm-8" style={{paddingLeft: '0px'}}>
                    <img src={g6} height="100%" width="100%" /> 
                </div>
            </div>     
            <img src={img3} height="100%" width="100%" atl=".." />      
        </div>
    </section>

    <br/><br/>

    <div style={{paddingTop: "3px", backgroundColor: "yellowgreen"}}>
    </div>

    </>
  )
}
