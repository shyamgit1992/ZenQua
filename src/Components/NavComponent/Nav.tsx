import React from 'react';
import { NavLink } from 'react-router-dom';
class Nav extends React.Component {
  handleNavClick = (path: string) => {
    //console.log('Pathname:', path);
    setTimeout(() => {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10); // Adjust the timeout duration as needed
  };
  
  render() {
    return (
      <div>
    {/* Start Header Area */}
                      
  <header className="header navbar-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="nav-inner">
            {/* Start Navbar */}
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/logo/white-logo.png" alt="Logo" />
              </a>
              <button
                className="navbar-toggler mobile-menu-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink onClick={() => this.handleNavClick('/')} to="/" aria-label="Toggle navigation">
                      Home
                   </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={() => this.handleNavClick('/about')} to="/about" aria-label="Toggle navigation">
                      About
                   </NavLink>
                  </li>
                    <li className="nav-item">
                    <a
                      className="dd-menu collapsed"
                      href="javascript:void(0)"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1-1"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      Devices
                    </a>
                    <ul className="sub-menu collapse" id="submenu-1-1">
                      <li className="nav-item">
                      <NavLink onClick={() => this.handleNavClick('/vehicle-device')} to="/vehicle-device"> <a><i className="lni lni-delivery" />&nbsp;Vehicle Traking Device</a></NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink onClick={() => this.handleNavClick('/personal-device')} to="/personal-device"> <a><i className="lni lni-user" />&nbsp;Personal Tracking Device</a></NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink onClick={() => this.handleNavClick('/pet-device')} to="/pet-device"> <a><i className="lni lni-heart-filled" />&nbsp;Pet Tracking Device</a></NavLink>
                      </li>
                    </ul>
                  </li> 
                  <li className="nav-item">
                    <a
                      className="dd-menu collapsed"
                      href="javascript:void(0)"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1-2"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      Services
                    </a>
                    <ul className="sub-menu collapse" id="submenu-1-2">
                      <li className="nav-item">
                      <NavLink onClick={() => this.handleNavClick('/vehicle-service')} to="/vehicle-service" ><a><i className="lni lni-delivery" />&nbsp;Vehicle Traking Service</a></NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink onClick={() => this.handleNavClick('/personal-service')} to="/personal-service"><a><i className="lni lni-user" />&nbsp;Personal Tracking Service</a></NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink onClick={() => this.handleNavClick('/pet-service')} to="/pet-service"><a><i className="lni lni-heart-filled" />&nbsp;Pet Tracking Service</a></NavLink>
                      </li>
                    </ul>
                  </li> 
                  <li className="nav-item">
                    <NavLink to="/documentation" aria-label="Toggle navigation">Documentation</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={() => this.handleNavClick('/downloads')} to="/downloads" aria-label="Toggle navigation">Downloads</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={() => this.handleNavClick('/pricing')} to="/pricing" aria-label="Toggle navigation">Pricing</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={() => this.handleNavClick('/contact')} to="/contact" aria-label="Toggle navigation">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={() => this.handleNavClick('/login')} to="/login" aria-label="Toggle navigation">Login&nbsp;<i className="lni lni-user"></i></NavLink>
                  </li>
                </ul>

              </div>{" "}
              {/* navbar collapse */}
              <div className="button">
                <NavLink onClick={() => this.handleNavClick('/signup')} className="btn" to="/signup">Get started</NavLink>
              </div>
             
            </nav>
            {/* End Navbar */}
          </div>
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </header>
  
  {/* End Header Area */}
      </div>
    );
  }
}

export default Nav;
