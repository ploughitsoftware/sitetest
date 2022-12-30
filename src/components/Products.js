import React from 'react'
import img19 from '../images/19.jpg';
import img16 from '../images/16.jpg';
import img17 from '../images/17.jpg';
import img18 from '../images/18.jpg';


export default function Products() {
  return (
    <>
        <section id="products" style={{paddingBottom: '0px'}}>
            <div className="container">
                <h1>Products</h1>
            </div>
        </section>

        <section style={{paddingLeft: '70px', paddingTop: '0px'}}>
            <div className="row">
                <div className="col-sm-4">
                    <img src={img19} height="300" width="300" style={{marginTop: '30px'}} alt='..'/>
                </div>
                <div className="col-sm-8">
                    <h1 style={{fontSize: '40px', marginTop: '70px', color: 'yellowgreen'}}>Cosmetics</h1>
                    <h1 style={{fontSize: '20px', marginBottom: '5px'}}>Chemical free Cosmetics</h1>
                    <p style={{marginBottom: '30px', marginRight:'100px', textAlign: 'justify'}}>
                    <ul>
                    <li> PLOUGH IT with the help of associates, brings forth the lavish lip balm, Aloe Vera gel,<br/> soaps, anti-aging serum, under eye creams, perfumes and hand-made body wash kits.</li>
                    <li>All products are made using clean and unadulterated beautifying agents</li>
                    <li>Every product can be customized as per personal request and specialized <br/>deluxe gift hampers are also part of the deal</li>
                    </ul> 
                    </p>         
                </div>
            </div>
        </section>

        <section style={{paddingLeft: '0px', paddingTop: '0px'}}>
            <div className="row">
                <div className="col-sm-7" style={{paddingLeft: '70px'}}>
                    <h1 style={{fontSize: '40px',marginTop: '70px', color: 'yellowgreen'}}>Gardening Equipment</h1>
                    <h1 style={{fontSize: '20px',marginBottom: '5px'}}>A source of strength for your passion</h1>
                    <p style={{marginBottom: '30px', marginRight:'50px', textAlign: 'justify'}}>
                    <ul>
                    <li>A lovely garden doesn't require a vast landscape; we may create our own <br/>terrace and balcony into one.</li>
                    <li>Make your own concrete jungle with our terrace farming kits and gardening equipment.</li>
                    <li>Our gardening advice from experts yields fruitful outcomes.</li>
                    </ul> 
                    </p><br/>
                </div>
                <div className="col-sm-5">
                <img src={img16} height="350" width="350" alt='..'/>
                </div>
            </div>
        </section>

        <section style={{paddingLeft: '70px', paddingTop:'0px'}}>
            <div className="row">
                <div className="col-sm-4">
                    <img src={img17} height="300" width="300" alt='..' />
                </div>
                <div className="col-sm-8">
                    <h1 style={{fontSize: '40px', marginTop: '70px', color: 'yellowgreen'}}>Fruits &amp; Vegetables</h1>
                    <h1 style={{fontSize: '20px',marginBottom: '5px'}}>Farm to Plate</h1>
                    <p style={{marginBottom: '30px', marginRight:"100px", textAlign: 'justify'}}>
                    <ul>
                        <li>Purchasing high-quality, fresh fruits and vegetables is just as important as eating them to <br/>maintain a healthy diet.</li>
                        <li>You don't need a silver plate to have a great meal all you need is fruits and vegetables <br/>which Plough IT provides.</li>
                        <li>We, the team Plough IT provide finest products with absolute texture, tender and toughness.</li>
                        <li>We maintain our fruits and vegetables with essential nutrients and minerals.</li>
                    </ul>
                    </p><br/>
                </div>
            </div>
        </section>

        <section style={{paddingLeft: '0px',paddingTop: '0px'}}>
            <div className="row">
                <div className="col-sm-7" style={{paddingLeft: '70px'}}>
                    <h1 style={{fontSize: '40px', marginTop: '70px', color: 'yellowgreen'}}>Personal Wellness</h1>
                    <h1 style={{fontSize: '20px', marginBottom: '5px'}}>Reflect your personality</h1>
                    <p style={{marginBottom: '30px', marginRight:'50px', textAlign: 'justify'}}>
                    <ul>
                        <li>Plough I T can provide you with customized products that best suits your needs and desires.</li>
                        <li>We customize products based on your requirement.</li>
                        <li>Personalized scents, room fresheners, and room decors are indeed available from us.</li>
                    </ul> 
                    </p><br/>
                </div>
                <div className="col-sm-4">
                    <img src={img18} height="300" width="300" alt=".."/>
                </div>
            </div>
        </section>
    </>
);
}








































