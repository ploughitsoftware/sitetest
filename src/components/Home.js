import React from 'react'
import img1 from '../images/img1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/logon.png';

export default function Home() {
  return (
    <>
      <section>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
              <div className="carousel-caption" style={{marginBottom: '7%'}}>
                <h1>VISION</h1>
                <p style={{fontSize: '20px'}}>Smart affordable farming solutions by experts for sustainable and profitable agriculture</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
              <div className="carousel-caption" style={{marginBottom: '7%'}}>
                <h1>MISSION</h1>
                <p style={{fontSize: '20px'}}> To provide innovative solutions that helps the different agriculture stakeholders to create a better life</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section id="sec1">
        <div className="row">
          <div className="col-sm-6  "><br/><br/>
            <h1 style={{fontSize: '70px'}}>PLOUGH IT</h1>
            <h1 style={{fontSize: '40px',color: 'yellowgreen', marginBottom: '10px'}}>We Aspire your Growth</h1><br/>
            <p style={{textAlign: 'justify'}}><span style={{fontSize: '30px', color: 'yellowgreen'}}>P</span>lough IT aims to provide socio-economic state for farmers and increase the growth of the agron lands.
                Plough IT hinge on rural methods of cultivation with science and service through information technology.
                We provide farm fresh goods to town and cities using technology as a primary level platform, we are responsible for managing end to end supply chain, targeting the business like restaurants, hotels and market areas. It also imparts its services to common households. Company adds value in terms of cleaning, sorting and packing with quality enduring products. Plough IT vouches saftey to its customers.
              </p>
            </div>
            <div className="col-sm-4"><br/><br/><br/>
              <img src={img4} style = {{ height:"300px", width:"350px", paddingLeft: '50px', marginTop: '50px'}} alt="..." />
            </div>
        </div>
      </section>
      
      <br/>
      <br/>

      <section id="vis">
        <div className="row">
          <div className="col-sm-3" >
            <h1 style={{ color: 'yellowgreen', fontSize: '40px', marginTop: '50px' }}>Motiv<span style={{ color: 'yellowgreen', marginBottom: '30px' }}>ation</span> </h1>
          </div>
          <div className="col-sm-9" style={{ paddingRight: '150px', borderLeft: '2px solid black' }} >
            <p style={{textAlign: 'justify'}}><span style={{color:'yellowgreen', fontSize: '30px'}}>A</span>griculture sector is one of the most important sectors in India. It is the place where work is worshiped and farmers are immensely respected, India has great history in agriculture, Vedic literature and Rig-Veda with diverse climatic conditions and high fertile land, the country has huge potential for providing enormous yields, though it has proper for proper raw materials, it lacks in accumulation of them we “Plough IT” a Vijayawada based company came up with a conceptualization which is a blend of IT and Agriculture sectors to resolve complex problems prevailing and to improve socio-economic status of the farmers
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
