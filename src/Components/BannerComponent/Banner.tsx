import React from "react";

class Banner extends React.Component{
 
    render(){
        return(
        <>
              {/* Start Hero Area */}
  <section id="/" className="hero-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
          <div className="hero-content">
            <h4 className="wow fadeInUp" data-wow-delay=".2s">
              25% OFF At First Monthly Services
            </h4>
            <h1 className="wow fadeInUp" data-wow-delay=".4s">
              Affordable World Class GPS Tracker
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              Explore and learn more about everything from gps Tracking solution by our store.
            </p>
            <h5 className="wow fadeInUp" data-wow-delay=".8s">
              Service start from $3.99/month
            </h5>
            <div className="button wow zoomIn" data-wow-delay="1s">
              <a href="#pricing">
                <i className="lni lni-arrow-down-circle" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Hero Area */}
        </>
        );
    }

}
export default Banner;