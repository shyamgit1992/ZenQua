import './EmailSuccess.css';
import { NavLink } from 'react-router-dom';
function EmailSuccess(){
    return(
        <>
        {/* Start Error Area */}
        <div className="maill-success">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="success-content">
                  <img
                    className="sahpe"
                    src="assets/images/shapes/shape.png"
                    alt="#"
                  />
                  <img
                    className="sahpe2"
                    src="assets/images/shapes/shape.png"
                    alt="#"
                  />
                  <h1>Successfull</h1>
                  <p>
                    Your message sent successfully, We will <br /> get back to you
                    asap.
                  </p>
                  <div className="button">
                  <NavLink to="/"><a href="#" className="btn">
                      Back to Home
                    </a></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Error Area */}
    
      
      </>
      
           
    
    );

}
export default EmailSuccess;