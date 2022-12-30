import React from 'react';
import img21 from '../images/21.jpg';
import img20 from '../images/20.jpg';
import img13 from '../images/13.jpg';
import img14 from '../images/14.jpg';

export default function Services() {
  return (
    <>
        <section id="products" style={{paddingBottom: '0px'}}>
            <div className="container">
                <h1>Services</h1>
            </div>
        </section>

        <section id="sec2">    
            <div className="row">
                <div className="col-sm-4">
                    <img src={img21} style={{height:"300", width:"300", marginTop: "30px"}} alt='..' />
                </div>
                <div className="col-sm-8">
                    <h1 style={{fontSize: '40px', marginTop: '70px', color: 'yellowgreen'}}>Field Visits</h1>
                    <h1 style={{fontSize: '20px', marginBottom: '5px'}}>Let Plough IT be your strategy in a field of uncertainty</h1>
                    <p style={{marginBottom: '30px', marginRight:'100px', textAlign: 'justify'}}>
                    <ul>
                        <li>An issue is deemed resolved only when the root cause is recognized and resolved. Allow us to be your<br/> screening tool and solver.</li>
                        <li>Plough IT presents you with simple and straightforward ways to lower errors and  boost your field value.</li>
                        <li>Whether it is a seed, soil, or success issue, we can provide you with the finest experimentally proven <br/>techniques at your own locations.</li>
                    </ul>
                    </p><br/>
                </div>
            </div>
        </section>

        <section id="sec3">    
            <div className="row">
                <div className="col-sm-7" style={{paddingLeft: '0px'}}>
                    <h1 style={{fontSize: '40px', marginTop: '70px', color: 'yellowgreen'}}>Consultancy</h1>
                    <h1 style={{fontSize: '20px', marginBottom: '5px'}}>Our suggestion to your confusion </h1>
                    <p style={{marginBottom: '30px', marginRight: '100px', textAlign: 'justify'}}>
                    <ul>                
                        <li>Plough IT links you with a professional service provider who can offer you experienced help.</li>
                        <li>We're here to troubleshoot your confusion and elicit confidence.</li>
                        <li>To fix your problem, we employ a variety of digital, analytical, statistical, and laboratory techniques.</li>
                        <li>We've teamed up with a number of experts and intellectuals to develop successful strategies.</li>
                    </ul>              
                    </p>
                    <br/><br/>
                </div>
                <div className="col-sm-5">
                    <img src={img20} style={{height:"300", width:"300", marginTop: "30px"}} alt='..'/>
                </div>
            </div>
        </section>        
        
        <section id="sec2">    
            <div className="row">
                <div className="col-sm-4">
                    <img src={img13} style={{  height:"300", width:"300", marginTop: '30px'}} alt='..'/>
                </div>
                <div className="col-sm-8">
                    <h1 style={{fontSize: '40px', marginTop: '70px', color: 'yellowgreen'}}>Farmer Training Program</h1>
                    <h1 style={{fontSize: '20px', marginBottom: '5px'}}>Plough IT turns aspiring farmers to expertise</h1>
                    <p style={{marginRight: '100px', textAlign: 'justify'}}>
                        <ul>
                            <li>Farming is not a skill that can be taught. Each plant has its own tale to tell, come let's listen<br/> to it together in the fields.</li>
                            <li>Our expert trainers will provide you knowledge of marketing, planning and organic farming.</li>
                            <li>Our trainees will get a chance to explore new modulations in field technologies that enhances yield.</li>
                            <li>We make every effort to give you with all of the talents that you want.</li>
                        </ul>
                    </p>     
                </div>
            </div>
        </section>     
       
        <section id="sec3">
    
        <div className="row">
          
            <div className="col-sm-6">
            <h1 style={{fontSize: '40px', marginTop: '70px', color: 'yellowgreen'}}>Scientific writeup</h1>
            <h1 style={{fontSize: '20px', marginBottom: '5px'}}>Choose us when you are at a loss for words</h1>
            
            <p style={{marginRight: '100px', textAlign: 'justify'}}>
                <ul>
                    <li>Our writings consist of thesis, review articles, research papers, and book chapters.</li>
                    <li>We efficiently contribute effective content that retains the originality of your work.</li>
                    <li>Payments are accepted on a term basis with deadlines.</li>
                </ul>
            </p>
            </div>
            <div className="col-sm-4">
                <img src={img14} alt='...' />
            </div>
        </div>
    
        </section>
    </>
  );
}
