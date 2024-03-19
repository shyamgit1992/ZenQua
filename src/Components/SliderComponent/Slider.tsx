import React from 'react';
import TinySlider from 'tiny-slider-react';
import './Slider.css';

const MySlider = () => {
  const settings = {
    container: '.testimonial-slider',
    items: 3,
    slideBy: 1, // Change to a number if you want to slide by one item
    autoplay: false,
    mouseDrag: true,
    gutter: 20,
    nav: true,
    controls: false,
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1170: {
        items: 3,
      }
    }
  };
  

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title align-center gray-bg">
              <h3 className="wow zoomIn" data-wow-delay=".1s">
                Our Testimonial
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                What they say about us <br />
                honest reviews
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Explore and learn more about everything from machine learning and
                global payments to scaling your team.
              </p>
            </div>
          </div>
        </div>
        <div className="row testimonial-slider">
          <TinySlider settings={settings}>
            {/* Testimonials */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-testimonial">
                {/* Testimonial content 1 */}
                <div className="quote-icon">
                  <i className="lni lni-quotation" />
                </div>
                <div className="author">
                  <img src="assets/images/testimonial/testi1.jpg" alt="#" />
                  <h4 className="name">
                    Jane Anderson
                    <span className="deg">Founder &amp; CEO</span>
                  </h4>
                </div>
                <div className="text">
                  <p>
                    "It’s amazing how much easier it has been to meet new people and
                    create instant connections. I have the exact same personality."
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonials */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-testimonial">
                {/* Testimonial content 2 */}
                <div className="quote-icon">
                  <i className="lni lni-quotation" />
                </div>
                <div className="author">
                  <img src="assets/images/testimonial/testi2.jpg" alt="#" />
                  <h4 className="name">
                    Devid Samuyel
                    <span className="deg">Web Developer</span>
                  </h4>
                </div>
                <div className="text">
                  <p>
                    "It’s amazing how much easier it has been to meet new people and
                    create instant connections. I have the exact same personality."
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonials */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-testimonial">
                {/* Testimonial content 3 */}
                <div className="quote-icon">
                  <i className="lni lni-quotation" />
                </div>
                <div className="author">
                  <img src="assets/images/testimonial/testi3.jpg" alt="#" />
                  <h4 className="name">
                    Jully Sulli
                    <span className="deg">Ui/Ux Designer</span>
                  </h4>
                </div>
                <div className="text">
                  <p>
                    "It’s amazing how much easier it has been to meet new people and
                    create instant connections. I have the exact same personality."
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonials */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-testimonial">
                {/* Testimonial content 4*/}
                <div className="quote-icon">
                  <i className="lni lni-quotation" />
                </div>
                <div className="author">
                  <img src="assets/images/testimonial/testi2.jpg" alt="#" />
                  <h4 className="name">
                    Devid Samuyel
                    <span className="deg">Web Developer</span>
                  </h4>
                </div>
                <div className="text">
                  <p>
                    "It’s amazing how much easier it has been to meet new people and
                    create instant connections. I have the exact same personality."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Add more testimonials */}
          </TinySlider>
        </div>
      </div>
    </section>
  );
};

export default MySlider;
