import './Pricing.css';
function Pricing(){
    return(
        <>
  {/* Start Breadcrumbs */}
  <div id="/pricing" className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Pricing Plan</h1>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start Pricing Table */}
  <section className="pricing section" id="pricing">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s">
              Pricing Plan
            </h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">
              Reliable Hosting Plan Built For Your Needs
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              Explore and learn more about everything from machine learning and
              global payments to scaling your team.
            </p>
          </div>
          <div className="pricing-tabs mt-4">
            <ul
              className="nav nav-pills rounded justify-content-center d-inline-block pricing-tab-border py-1 px-2"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item d-inline-block">
                <a
                  className="nav-link px-3 rounded active monthly"
                  id="Monthly"
                  data-bs-toggle="pill"
                  href="#Month"
                  role="tab"
                  aria-controls="Month"
                  aria-selected="true"
                >
                  Monthly
                </a>
              </li>
              <li className="nav-item d-inline-block">
                <a
                  className="nav-link px-3 rounded yearly"
                  id="Yearly"
                  data-bs-toggle="pill"
                  href="#Year"
                  role="tab"
                  aria-controls="Year"
                  aria-selected="false"
                >
                  Yearly
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="Month"
              role="tabpanel"
              aria-labelledby="Monthly"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Pricing s*/}
                  <div className="single-pricing">
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
                    <h3 className="title">Starter</h3>
                    <span className="start-at">Starting at:</span>
                    <h3 className="price">
                      $49<span className="sent">.99</span>
                      <span className="duration">/mo</span>
                    </h3>
                    <p className="old-price">$64.99</p>
                    <h5 className="save-price">Save 23% on 1st Month</h5>
                    <ul className="item-list">
                      <li>1 Website (Limited)</li>
                      <li>1 Business Email</li>
                      <li>Limited Bandwidth (100 GB)</li>
                      <li>Free SSL Certificate</li>
                      <li>1X Allocated Resources</li>
                    </ul>
                    <div className="button">
                      <a className="btn" href="javascript:void(0)">
                        Order Now
                      </a>
                    </div>
                  </div>
                  {/* End Single Pricing s*/}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Pricing s*/}
                  <div className="single-pricing">
                    <span className="badge">Most Popular</span>
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
                    <h3 className="title">Business</h3>
                    <span className="start-at">Starting at:</span>
                    <h3 className="price">
                      $69<span className="sent">.99</span>
                      <span className="duration">/mo</span>
                    </h3>
                    <p className="old-price">$99.99</p>
                    <h5 className="save-price">Save 20% on 1st Month</h5>
                    <ul className="item-list">
                      <li>Unlimited Website</li>
                      <li>Unlimited Email Accounts</li>
                      <li>Limited Bandwidth (100 GB)</li>
                      <li>Free SSL Certificate</li>
                      <li>1X Allocated Resources</li>
                    </ul>
                    <div className="button">
                      <a className="btn" href="javascript:void(0)">
                        Order Now
                      </a>
                    </div>
                  </div>
                  {/* End Single Pricing s*/}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Pricing s*/}
                  <div className="single-pricing">
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
                    <h3 className="title">Premium</h3>
                    <span className="start-at">Starting at:</span>
                    <h3 className="price">
                      $139<span className="sent">.99</span>
                      <span className="duration">/mo</span>
                    </h3>
                    <p className="old-price">$159.99</p>
                    <h5 className="save-price">Save 20% on 1st Month</h5>
                    <ul className="item-list">
                      <li>Unlimited Website</li>
                      <li>Unlimited Email Accounts</li>
                      <li>Limited Bandwidth (100 GB)</li>
                      <li>Free SSL Certificate</li>
                      <li>4X Allocated Resources</li>
                    </ul>
                    <div className="button">
                      <a className="btn" href="javascript:void(0)">
                        Order Now
                      </a>
                    </div>
                  </div>
                  {/* End Single Pricing s*/}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="Year"
              role="tabpanel"
              aria-labelledby="Yearly"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Pricing s*/}
                  <div className="single-pricing">
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
                    <h3 className="title">Starter</h3>
                    <span className="start-at">Starting at:</span>
                    <h3 className="price">
                      $99<span className="sent">.99</span>
                      <span className="duration">/mo</span>
                    </h3>
                    <p className="old-price">$129.99</p>
                    <h5 className="save-price">Save 23% on 1st Month</h5>
                    <ul className="item-list">
                      <li>1 Website (Limited)</li>
                      <li>1 Business Email</li>
                      <li>Limited Bandwidth (100 GB)</li>
                      <li>Free SSL Certificate</li>
                      <li>1X Allocated Resources</li>
                    </ul>
                    <div className="button">
                      <a className="btn" href="javascript:void(0)">
                        Order Now
                      </a>
                    </div>
                  </div>
                  {/* End Single Pricing s*/}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Pricing s*/}
                  <div className="single-pricing">
                    <span className="badge">Most Popular</span>
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
                    <h3 className="title">Business</h3>
                    <span className="start-at">Starting at:</span>
                    <h3 className="price">
                      $125<span className="sent">.99</span>
                      <span className="duration">/mo</span>
                    </h3>
                    <p className="old-price">$179.99</p>
                    <h5 className="save-price">Save 20% on 1st Month</h5>
                    <ul className="item-list">
                      <li>Unlimited Website</li>
                      <li>Unlimited Email Accounts</li>
                      <li>Limited Bandwidth (100 GB)</li>
                      <li>Free SSL Certificate</li>
                      <li>1X Allocated Resources</li>
                    </ul>
                    <div className="button">
                      <a className="btn" href="javascript:void(0)">
                        Order Now
                      </a>
                    </div>
                  </div>
                  {/* End Single Pricing s*/}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Single Pricing s*/}
                  <div className="single-pricing">
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
                    <h3 className="title">Premium</h3>
                    <span className="start-at">Starting at:</span>
                    <h3 className="price">
                      $399<span className="sent">.99</span>
                      <span className="duration">/mo</span>
                    </h3>
                    <p className="old-price">$499.99</p>
                    <h5 className="save-price">Save 20% on 1st Month</h5>
                    <ul className="item-list">
                      <li>Unlimited Website</li>
                      <li>Unlimited Email Accounts</li>
                      <li>Limited Bandwidth (100 GB)</li>
                      <li>Free SSL Certificate</li>
                      <li>4X Allocated Resources</li>
                    </ul>
                    <div className="button">
                      <a className="btn" href="javascript:void(0)">
                        Order Now
                      </a>
                    </div>
                  </div>
                  {/* End Single Pricing s*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Pricing Table */}
  {/* Start Pricing Style 2 Area */}
  <div className="pricing-style2 section bg-white">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s">
              Pricing Plan
            </h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">
              Choose your favirote one
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              Explore and learn more about everything from machine learning and
              global payments to scaling your team.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Pricing s*/}
          <div className="single-pricing">
            <div className="p-icon">
              <i className="lni lni-folder" />
            </div>
            <h3 className="title">Shared Starter</h3>
            <p className="des">
              Lorem ipsum dolor sit amet, conse tetur adipiscing elit.
            </p>
            <span className="start-at">Starting at:</span>
            <h3 className="price">
              $49<span className="sent">.99</span>
              <span className="duration">/mo</span>
            </h3>
            <div className="button">
              <a className="btn" href="javascript:void(0)">
                Order Now
              </a>
            </div>
          </div>
          {/* End Single Pricing s*/}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Pricing s*/}
          <div className="single-pricing">
            <div className="p-icon">
              <i className="lni lni-handshake" />
            </div>
            <h3 className="title">Shared Business</h3>
            <p className="des">
              Lorem ipsum dolor sit amet, conse tetur adipiscing elit.
            </p>
            <span className="start-at">Starting at:</span>
            <h3 className="price">
              $69<span className="sent">.99</span>
              <span className="duration">/mo</span>
            </h3>
            <div className="button">
              <a className="btn" href="javascript:void(0)">
                Order Now
              </a>
            </div>
          </div>
          {/* End Single Pricing s*/}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Pricing s*/}
          <div className="single-pricing">
            <div className="p-icon">
              <i className="lni lni-layers" />
            </div>
            <h3 className="title">Shared Premium</h3>
            <p className="des">
              Lorem ipsum dolor sit amet, conse tetur adipiscing elit.
            </p>
            <span className="start-at">Starting at:</span>
            <h3 className="price">
              $89<span className="sent">.99</span>
              <span className="duration">/mo</span>
            </h3>
            <div className="button">
              <a className="btn" href="javascript:void(0)">
                Order Now
              </a>
            </div>
          </div>
          {/* End Single Pricing s*/}
        </div>
      </div>
    </div>
  </div>
  {/* End Pricing Style 2 Area */}
</>

    );
}
export default Pricing;