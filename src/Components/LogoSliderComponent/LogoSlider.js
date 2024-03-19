import React from 'react';
import TinySlider from 'tiny-slider-react';
//import './LogoSlider.css';
import './Logo.css';

const MyLogoSlider = () => {
  const settings = {
    container: '.client-logo-carousel',
            slideBy: 'page',
            autoplay: true,
            autoplayButtonOutput: false,
            mouseDrag: true,
            gutter: 15,
            nav: false,
            controls: false,
            responsive: {
                0: {
                    items: 1,
                },
                540: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1170: {
                    items: 4,
                }
            }
  };

  return (
    <>
  {/* Start Clients Area */}
  
  <div className="client-logo">
 
    <div className="container">
    
      <div className="client-logo-wrapper">
      
        <div className="client-logo-carousel d-flex align-items-center justify-content-between">
        <TinySlider settings={settings}>
          <div className="single-logo">
            <img src="assets/images/client-logo/graygrids-logo.svg" alt="#" />
          </div>
          <div className="single-logo">
            <img src="assets/images/client-logo/lineicons-logo.svg" alt="#" />
          </div>
          <div className="single-logo">
            <img src="assets/images/client-logo/ayro-logo.svg" alt="#" />
          </div>
          <div className="single-logo">
            <img src="assets/images/client-logo/uideck-logo.svg" alt="#" />
          </div>
          <div className="single-logo">
            <img src="assets/images/client-logo/lineicons-logo.svg" alt="#" />
          </div>
          <div className="single-logo">
            <img src="assets/images/client-logo/ayro-logo.svg" alt="#" />
          </div>
          </TinySlider>
        </div>
        
      </div>
      
    </div>
    
  </div>
  
  {/* End Clients Area */}
</>

  );
};

export default MyLogoSlider;
