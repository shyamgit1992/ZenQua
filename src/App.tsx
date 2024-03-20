import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/NavComponent/Nav';
import Banner from './Components/BannerComponent/Banner';
import About from './Components/AboutComponent/About';
import Content from './Components/ContentComponents/Content';
import VehicleDevice from './Components/VehicleDeviceComponent/VehicleDevice';
import PersonalDevice from './Components/PersonalDeviceComponent/PersonalDevice';
import PetDevice from './Components/PetDeviceComponent/PetDevice';
import VehicleService from './Components/VehicleServiceComponent/VehicleService';
import PersonalService from './Components/PersonalServiceComponent/PersonalService';
import PetService from './Components/PetServiceComponent/PetService';
import PasswordReset from './Components/PasswordResetComponent/PasswordReset';
import EmailSuccess from './Components/EmailSuccessComponent/EmailSuccess';
import NotFound from './Components/NotFoundComponent/NotFound';
import Documentation from './Components/DocumentationComponent/Documentation';
import Downloads from './Components/DownloadsComponent/Downloads';
import Pricing from './Components/PricingComponent/Pricing';
import Contact from './Components/ContactComponent/Contact';
import SignUp from './Components/SignUpComponent/SignUp';
import Login from './Components/LoginComponent/Login';
import Footer from './Components/FooterComponent/Footer';
import Check from './Components/CheckComponent/check';

class App extends React.Component{
  render(){
    return(
      <>
       <Nav />
        <Routes>
          <Route path='/' element={<>
            <Banner/>
            <Content />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicle-device" element={<VehicleDevice />} />
          <Route path="/personal-device" element={<PersonalDevice />} />
          <Route path="/pet-device" element={<PetDevice />} />
          <Route path="/vehicle-service" element={<VehicleService />} />
          <Route path="/personal-service" element={<PersonalService />} />
          <Route path="/pet-service" element={<PetService />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pass-reset" element={<PasswordReset />} />
          <Route path="/email-success" element={<EmailSuccess />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/check" element={<Check />} />
          {/* Define other routes here */}
        </Routes>
        
        <Footer />
      </>
      
    )
  }
}

export default App;
