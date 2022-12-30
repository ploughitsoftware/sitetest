import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Research from './components/Research';
import Services from './components/Services';
import Home from './components/Home';
import Team from './components/Team';
import Products from './components/Products';
import Blogs from './components/Blogs';
import Gallery from './components/Gallery';


function App() {
  return(
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/Research" element={<Research/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>   
      <Footer/> 
    </BrowserRouter>    
    </>
  );
}

export default App;
