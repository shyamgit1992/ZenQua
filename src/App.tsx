import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/NavComponent/Nav';
import Banner from './Components/BannerComponent/Banner';
import About from './Components/AboutComponent/About';
import Content from './Components/ContentComponents/Content';
import SignUp from './Components/SignUpComponent/SignUp';
import Login from './Components/LoginComponent/Login';
import Footer from './Components/FooterComponent/Footer';

class App extends React.Component{
  render(){
    return(
      <>
       <Nav />
        <Banner />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          {/* Define other routes here */}
        </Routes>
        <Content />
        <Footer />
      </>
      
    )
  }
}

export default App;
