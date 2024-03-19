import './NotFound.css';
import { NavLink } from 'react-router-dom';
function NotFound(){
    return(
        <>
        {/* Start Error Area */}
        <div className="error-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="error-content">
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
                  <h1>404</h1>
                  <h2>
                    The page you were looking for
                    <br /> doesn't exist anymore.
                  </h2>
                  <p>It might have been moved or deleted.</p>
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
export default NotFound;