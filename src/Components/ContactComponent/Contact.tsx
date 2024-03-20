import './Contact.css';
import React from 'react';
class Contact extends React.Component{
  render(){
    return(
        <>
  {/* Start Breadcrumbs */}
  <div id="/contact" className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Contact Us</h1>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start Contact Area */}
  <div className="contact-us section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s">
              Contact Form
            </h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">
              How can we help you?
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              Explore and learn more about everything from machine learning and
              global payments to scaling your team.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-12">
          <div className="contact-form">
            <form className="form" method="post" action="assets/mail/mail.php">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Andrio Gilius"
                      //required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="exampla@gmail.com*"
                      //required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Your Subject</label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Type your subject"
                      //required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>How can we help you?</label>
                    <textarea
                      placeholder="Tell me more about your project"
                      name="message"
                      id="message-area"
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="button">
                    <button type="submit" className="btn ">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Contact Area */}
</>

    );
    }
}
export default Contact;