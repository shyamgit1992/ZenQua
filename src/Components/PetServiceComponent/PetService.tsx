import './PetService.css';
import React from 'react';
class PetService extends React.Component{
  render(){
    return(
        <>
  {/* Start Breadcrumbs */}
  <div id="/pet-service" className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Pet Service</h1>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Pet Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start Blog Singel Area */}
  <section className="section blog-single">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12">
          <div className="single-inner">
            <div className="post-details">
              <div className="main-content-head">
                <div className="post-thumbnils">
                  <img src="assets/images/blog/blog-details.jpg" alt="#" />
                  <div className="meta-information">
                    {/* End Meta Info */}
                    <ul className="meta-info">
                      <li>
                        <a href="javascript:void(0)">By Martin King</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">20 Jun 2023</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Marketing</a>
                      </li>
                    </ul>
                    {/* End Meta Info */}
                  </div>
                </div>
                <div className="detail-inner">
                  <h2 className="post-title">
                    To Most Best Sale Domain Article In October 2020
                  </h2>
                  <p>
                    With over 25,000 customers worldwide, Appex is the world
                    leading analytics and marketing suite for Instagram and a
                    partner of the world's most-loved brands such as National
                    Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.
                  </p>
                  <p>
                    As a Customer Support Specialist, we expect you to be
                    up-to-date with the latest digital technologies and social
                    media trends. You should have excellent communication skills
                    and be able to assist our customers in a fast, efficient and
                    professional manner. If you enjoy fixing issues and helping
                    improve the overall customer experience, this job is for
                    you!
                  </p>
                  <h3>How We Do A Concert In Pandemic</h3>
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway
                  </p>
                  <p>
                    Heading towards a streamlined cloud solution. User generated
                    content in real-time will have multiple touchpoints for
                    offshoring Capitalize on low hanging fruit to identify a
                    ballpark value added activity to beta test. Override the
                    digital divide with additional
                  </p>
                  <h3>Security and Reliability</h3>
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop
                    on focusing solely on the bottom line.
                  </p>
                  <blockquote>
                    <img
                      className="shape"
                      src="assets/images/shapes/shape.png"
                      alt="#"
                    />
                    <img
                      className="shape2"
                      src="assets/images/shapes/shape.png"
                      alt="#"
                    />
                    <div className="icon">
                      <i className="lni lni-quotation" />
                    </div>
                    <h4>
                      "Don't demand that things happen as you wish, but wish
                      that they happen as they do happen, and you will go on
                      well."
                    </h4>
                    <span>- Epictetus, The Enchiridion</span>
                  </blockquote>
                  <h3>Setting the mood with incense</h3>
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time
                  </p>
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Start Comments */}
          <div className="post-comments">
            <h3 className="comment-title">
              <span>02 Comments on this post</span>
            </h3>
            <ul className="comments-list">
              <li>
                <div className="comment-img">
                  <img src="assets/images/blog/comment1.jpg" alt="img" />
                </div>
                <div className="comment-desc">
                  <div className="desc-top">
                    <h6>Wiliym Smith</h6>
                    <span className="date">28 Dec 2023</span>
                    <a href="javascript:void(0)" className="reply-link">
                      <i className="lni lni-reply" />
                      Reply
                    </a>
                  </div>
                  <p>
                    Donec aliquam ex ut odio dictum, ut consequat leo interdum.
                    Aenean nunc ipsum, blandit eu enim sed, facilisis convallis
                    orci. Etiam commodo lectus quis vulputate tincidunt. Mauris
                    tristique velit eu magna maximus condimentum.
                  </p>
                </div>
              </li>
              <li>
                <div className="comment-img">
                  <img src="assets/images/blog/comment2.jpg" alt="img" />
                </div>
                <div className="comment-desc">
                  <div className="desc-top">
                    <h6>Jenifer Lofez</h6>
                    <span className="date">25 Mar 2023</span>
                    <a href="javascript:void(0)" className="reply-link">
                      <i className="lni lni-reply" />
                      Reply
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* End Comments */}
          {/* Start Comment Form */}
          <div className="comment-form">
            <h3 className="comment-reply-title">Leave a comment</h3>
            <form action="#" method="POST">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-box form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-custom"
                      placeholder="Name*"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-box form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-custom"
                      placeholder="Email*"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-box form-group">
                    <textarea
                      name="#"
                      className="form-control form-control-custom"
                      placeholder="Comments*"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="button">
                    <button type="submit" className="btn">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* End Comment Form */}
        </div>
        <aside className="col-lg-4 col-md-12 col-12">
          <div className="sidebar">
            {/* Start Single Widget */}
            <div className="widget search-widget">
              <form action="#">
                <input type="text" placeholder="Search ..." />
                <button type="submit">
                  <i className="lni lni-search-alt" />
                </button>
              </form>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="widget popular-feeds">
              <h5 className="widget-title">Recent Posts</h5>
              <div className="popular-feed-loop">
                <div className="single-popular-feed">
                  <div className="post-image">
                    <a href="blog-single.html">
                      <img src="assets/images/blog/sidebar-1.jpg" alt="#" />
                    </a>
                  </div>
                  <div className="feed-desc">
                    <h6 className="post-title">
                      <a href="blog-single.html">
                        Owning a Domain is Key to Democratizing the Web
                      </a>
                    </h6>
                    <span className="time">
                      <i className="lni lni-calendar" /> 05th Nov 2023
                    </span>
                  </div>
                </div>
                <div className="single-popular-feed">
                  <div className="post-image">
                    <a href="blog-single.html">
                      <img src="assets/images/blog/sidebar-2.jpg" alt="#" />
                    </a>
                  </div>
                  <div className="feed-desc">
                    <h6 className="post-title">
                      <a href="blog-single.html">
                        Should You Turn a Domain into a Business?
                      </a>
                    </h6>
                    <span className="time">
                      <i className="lni lni-calendar" /> 24th March 2023
                    </span>
                  </div>
                </div>
                <div className="single-popular-feed">
                  <div className="post-image">
                    <a href="blog-single.html">
                      <img src="assets/images/blog/sidebar-3.jpg" alt="#" />
                    </a>
                  </div>
                  <div className="feed-desc">
                    <h6 className="post-title">
                      <a href="blog-single.html">
                        Businesses that Use New Domain Extensions
                      </a>
                    </h6>
                    <span className="time">
                      <i className="lni lni-calendar" /> 30th Jan 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="widget categories-widget">
              <h5 className="widget-title">Categories</h5>
              <ul className="custom">
                <li>
                  <a href="javascript:void(0)">
                    Development <span className="badge rounded">10</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    Domain <span className="badge rounded">12</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    Hosting <span className="badge rounded">35</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    Web Security <span className="badge rounded">28</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    Technology <span className="badge rounded">15</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    Cyber Security <span className="badge rounded">55</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="widget popular-tag-widget">
              <h5 className="widget-title">Popular Tags</h5>
              <div className="tags">
                <a href="javascript:void(0)">Hosting</a>
                <a href="javascript:void(0)">Domain</a>
                <a href="javascript:void(0)">VPS</a>
                <a href="javascript:void(0)">Cloud</a>
                <a href="javascript:void(0)">Dedicated</a>
                <a href="javascript:void(0)">Css</a>
                <a href="javascript:void(0)">Html</a>
                <a href="javascript:void(0)">WordPress</a>
              </div>
            </div>
            {/* End Single Widget */}
          </div>
        </aside>
      </div>
    </div>
  </section>
  {/* End Blog Singel Area */}
</>


    );
  }

}
export default PetService;