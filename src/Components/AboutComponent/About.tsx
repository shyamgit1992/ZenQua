import MyLogoSlider from '../LogoSliderComponent/LogoSlider';
import MySlider from '../SliderComponent/Slider';
import './About.css';
function About(){
  return(
    <>
  {/* Start Breadcrumbs */}
  <div id="/about" className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">About Us</h1>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start About Area */}
  <section className="about section about-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="content">
            <h2>
              <span>ABOUT US</span>
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
  {/* Start Counter Area */}
  <section className="counter-area section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12">
          <div className="single-counter wow fadeInUp" data-wow-delay=".2s">
            <h3 className="counter">
              <span id="secondo1" className="countup" cup-end={5}>
                5
              </span>
              M+
            </h3>
            <p>Customers visit Omega every month to get their service done.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="single-counter wow fadeInUp" data-wow-delay=".4s">
            <h3 className="counter">
              <span id="secondo2" className="countup" cup-end={92}>
                92
              </span>
              %
            </h3>
            <p>Satisfaction rate comes from our awesome customers.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="single-counter wow fadeInUp" data-wow-delay=".6s">
            <h3 className="counter">
              <span id="secondo3" className="countup" cup-end={500}>
                500
              </span>
              +
            </h3>
            <p>Average Award we have got all over internet.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Counter Area */}
  {/* Start Team Area */}
  <section className="team section bg-white">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s">
              Expert Team
            </h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">
              Meet HostGrids Team
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              Explore and learn more about everything from machine learning and
              global payments to scaling your team.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-3 col-md-6 col-12 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {/* Start Single Team */}
          <div className="single-team">
            <div className="team-image">
              <img src="assets/images/team/team4.jpg" alt="#" />
            </div>
            <div className="content">
              <h4>
                Alan Millar
                <span>Chief Operating Officer</span>
              </h4>
            </div>
            <ul className="social">
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-facebook-filled" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-instagram" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-twitter-original" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-linkedin-original" />
                </a>
              </li>
            </ul>
          </div>
          {/* End Single Team */}
        </div>
        <div
          className="col-lg-3 col-md-6 col-12 wow fadeInUp"
          data-wow-delay="0.4s"
        >
          {/* Start Single Team */}
          <div className="single-team">
            <div className="team-image">
              <img src="assets/images/team/team2.jpg" alt="#" />
            </div>
            <div className="content">
              <h4>
                Nancy aston
                <span>Founder/CEO</span>
              </h4>
            </div>
            <ul className="social">
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-facebook-filled" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-instagram" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-twitter-original" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-linkedin-original" />
                </a>
              </li>
            </ul>
          </div>
          {/* End Single Team */}
        </div>
        <div
          className="col-lg-3 col-md-6 col-12 wow fadeInUp"
          data-wow-delay="0.6s"
        >
          {/* Start Single Team */}
          <div className="single-team">
            <div className="team-image">
              <img src="assets/images/team/team3.jpg" alt="#" />
            </div>
            <div className="content">
              <h4>
                Quon aston
                <span>Chief Technology Officer</span>
              </h4>
            </div>
            <ul className="social">
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-facebook-filled" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-instagram" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-twitter-original" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-linkedin-original" />
                </a>
              </li>
            </ul>
          </div>
          {/* End Single Team */}
        </div>
        <div
          className="col-lg-3 col-md-6 col-12 wow fadeInUp"
          data-wow-delay="0.8s"
        >
          {/* Start Single Team */}
          <div className="single-team">
            <div className="team-image">
              <img src="assets/images/team/team1.jpg" alt="#" />
            </div>
            <div className="content">
              <h4>
                Quon aston
                <span>Chief Technology Officer</span>
              </h4>
            </div>
            <ul className="social">
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-facebook-filled" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-instagram" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-twitter-original" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="lni lni-linkedin-original" />
                </a>
              </li>
            </ul>
          </div>
          {/* End Single Team */}
        </div>
      </div>
    </div>
  </section>
  {/*/ End Team Area */}
{/* Start Testimonials Area */}      
<MySlider />
 {/* End Testimonials Area */}
  {/* Start Features Area */}
  <section className="features section">
    <img className="shape" src="assets/images/shapes/shape.png" alt="#" />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s">
              Our Principles
            </h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">
              Explore our awesome features
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              Explore and learn more about everything from machine learning and
              global payments to scaling your team.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          {/* Start Single Feature */}
          <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
            <div className="list-icon">
              <i className="lni lni-bolt" />
            </div>
            <h3>Faster Loading Speed</h3>
            <p>
              Composed in a pseudo-Latin language which more or less
              pseudo-Latin language corresponds.
            </p>
          </div>
          {/* End Single Feature */}
          {/* Start Single List */}
          <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
            <div className="list-icon">
              <i className="lni lni-lock" />
            </div>
            <h3>100% Safe and Secure</h3>
            <p>
              Composed in a pseudo-Latin language which more or less
              pseudo-Latin language corresponds.
            </p>
          </div>
          {/* End Single List */}
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          {/* Start Single Feature */}
          <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
            <div className="list-icon">
              <i className="lni lni-dashboard" />
            </div>
            <h3>99% Uptime Guarantee</h3>
            <p>
              Composed in a pseudo-Latin language which more or less
              pseudo-Latin language corresponds.
            </p>
          </div>
          {/* End Single Feature */}
          {/* Start Single Feature */}
          <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
            <div className="list-icon">
              <i className="lni lni-headphone" />
            </div>
            <h3>24/7 Customer Support</h3>
            <p>
              Composed in a pseudo-Latin language which more or less
              pseudo-Latin language corresponds.
            </p>
          </div>
          {/* End Single Feature */}
        </div>
      </div>
      <div className="row">
        <div className="col-12 align-center">
          <div className="explore-all button">
            <a href="javascript:void(0)" className="btn">
              Explore all features
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Features Area */}
  

  {/* Start Clients Area */}
 
  {<MyLogoSlider/>}
        
       
    
  
  {/* End Clients Area */}




</>

  );
}
export default About;