import './PasswordReset.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
class PasswordReset extends React.Component{
  handleNavClick = (path: string) => {
    //console.log('Pathname:', path);
    setTimeout(() => {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10); // Adjust the timeout duration as needed
  };
  render(){
    return(
        <>
  {/* Start Breadcrumbs */}
  <div className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Reset Password</h1>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Reset Password</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start Reset Password Area */}
  <div id="/pass-reset" className="account-login section reset-pass">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
          <form className="card login-form inner-content" method="post">
            <div className="card-body">
              <div className="title">
                <h3>Reset Password</h3>
                <p>
                  Need to reset your password? No problem! Just enter your email
                  &amp; click the button below.
                </p>
              </div>
              <div className="input-head">
                <div className="form-group input-group">
                  <label>
                    <i className="lni lni-envelope" />
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="reg-email"
                    placeholder="Enter your email"
                    //required=""
                  />
                </div>
              </div>
              <div className="button">
                <button className="btn" type="submit">
                  Send Rest Link
                </button>
              </div>
              <h4 className="create-account">
                Login to your account <NavLink onClick={() => this.handleNavClick('/login')} to="/login"><a>Click here</a></NavLink>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* End Reset Password Area */}
</>


    );
  }

}
export default PasswordReset;