import './Downloads.css';
function Downloads(){
    return(
        <>
          {/* Start Breadcrumbs */}
  <div id="/downloads" className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Downloads</h1>
            <ul className="breadcrumb-nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>Downloads</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
        {/* Start About Area */}
      <section className="about section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="content">
                <h2>
                  <span>Downloads</span>
                  Everything Your Website Needs From Start Up To Success
                </h2>
                <p>
                  Dictum non consectetur a erat nam at lectus urna. Hac habitasse
                  platea dictumst quisque sagittis. Augue lacus viverra vitae congue
                  eu consequat ac
                </p>
                <div className="button">
                  <a href="javascript:void(0)" className="btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="image">
                <img src="assets/images/about/about-45.jpg" alt="#" />
                <img
                  className="shape"
                  src="assets/images/shapes/shape.png"
                  alt="#"
                />
                <div className="play-thumb">
                  <a
                    href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                    className="glightbox video"
                  >
                    <i className="lni lni-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Area */}
        </>
        
    );
}
export default Downloads;