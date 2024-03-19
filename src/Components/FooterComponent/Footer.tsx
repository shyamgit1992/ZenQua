import React from "react";
import { NavLink } from 'react-router-dom';
class Footer extends React.Component{
    render(){
        return(
        <>
        {/* Start Footer Area */}
  <footer className="footer section">
    {/* Start Footer Top */}
    <div className="footer-top">
      <div className="container">
        <div className="inner-content">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer f-about">
                <div className="logo">
                  <NavLink to="/"><a href="#">
                    <img src="assets/images/logo/white-logo.png" alt="#" />
                  </a></NavLink>
                </div>
                <p>
                NavGate : Precision GPS Tracking Solutions for Seamless Navigation and Efficient Fleet Management.
                </p>
                <a className="call" href="tel:+919589427824">
                  <i className="lni lni-phone-set" /> +91 9589427824
                </a>
                <div className="payments">
                  <img src="assets/images/footer/cards.png" alt="#" />
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
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-youtube" />
                    </a>
                  </li>
                </ul>
                <p className="copyright-text">
                  © 2024 NavGate.
                  <br />
                  Designed and Developed by{" "}
                  <a href="#" target="_blank">
                    Shyam Gupta
                  </a>
                </p>
              </div>
              {/* End Single Widget */}
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer f-link">
                <h3>Pages</h3>
                <ul>
                  <li>
                    <NavLink to="/about"><a href="javascript:void(0)">About Us</a></NavLink>
                  </li>
                  <li>
                    <NavLink to="/services"><a href="javascript:void(0)">Services</a></NavLink>
                  </li>
                  <li>
                    <NavLink to="/pricing"><a href="javascript:void(0)">
                      Pricing{" "}
                      <span
                        style={{ marginLeft: 4 }}
                        className="badge bg-success rounded text-white"
                      >
                        Try Me
                      </span>
                    </a></NavLink>
                  </li>
                  <li>
                  <NavLink to="/contact"><a href="javascript:void(0)">Contact</a></NavLink>
                  </li>
                </ul>
                {/* <h4 className="mt-40 mb-20 text-white" style={{ fontSize: 18 }}>
                  Hosting
                </h4>
                <ul>
                  <li>
                    <a href="javascript:void(0)">Shared Hosting</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Dedicated Hosting</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Reseller Hosting</a>
                  </li>
                </ul> */}
              </div>
              {/* End Single Widget */}
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer f-link">
                <h3>Security</h3>
                <ul>
                  <li>
                    <a href="javascript:void(0)">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Disclaimer</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">FAQ</a>
                  </li>
                </ul>
                <h4 className="mt-40 mb-20 text-white" style={{ fontSize: 18 }}>
                  Support
                </h4>
                <ul>
                  <li>
                    <a href="javascript:void(0)">Support Center</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Status Updates</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Knowledgebase</a>
                  </li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer latest-news">
                <h3>Latest News</h3>
                <div className="single-head">
                  {/* Start Single News */}
                  <div className="single-news">
                    <span className="date">
                      <a href="javascript:void(0)">NOVEMBER 29, 2023</a>
                    </span>
                    <h4 className="post-title">
                      <a href="blog-single.html">
                        An artistic Technology turning real here
                      </a>
                    </h4>
                  </div>
                  {/* End Single News */}
                  {/* Start Single News */}
                  <div className="single-news">
                    <span className="date">
                      <a href="javascript:void(0)">NOVEMBER 22, 2023</a>
                    </span>
                    <h4 className="post-title">
                      <a href="blog-single.html">
                        better time for buying a web hosting is today
                      </a>
                    </h4>
                  </div>
                  {/* End Single News */}
                  {/* Start Single News */}
                  <div className="single-news">
                    <span className="date">
                      <a href="javascript:void(0)">NOVEMBER 15, 2023</a>
                    </span>
                    <h4 className="post-title">
                      <a href="blog-single.html">
                        better time for buying a web hosting is today
                      </a>
                    </h4>
                  </div>
                  {/* End Single News */}
                </div>
              </div>
              {/* End Single Widget */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ End Footer Top */}
    {/* Start Footer Bottom Area */}
    <div className="footer-bottom-area">
      <div className="container">
        <div className="inner-content">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="text">
                Offers valid for a limited time only hostpack reflect multi
                annual discounts. Other terms and conditions may apply.{" "}
                <a href="javascript:void(0)">Click Here</a>
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="align-right">
                <img src="assets/images/footer/certificate3.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Footer Bottom Area */}
  </footer>
  {/*/ End Footer Area */}
        </>
        );
    }

}
export default Footer;