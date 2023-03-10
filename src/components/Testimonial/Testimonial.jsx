import React from 'react';
import './Testimonial.css';
import client1 from "../images/testimonial/client1.jpg"
import client2 from "../images/testimonial/client2.jpg"
import client3 from "../images/testimonial/client3.jpg"

const TestimonialSection = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>What Our Clients are saying<span className='text-success'>...</span></h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4 col-lg-offset-2">
            <div className="testimonial-item">
              <img
                src={client1}
                className="img-circle"
                alt=""
              />
              <h4>Neha</h4>
              <h6>Photomatci - Occasion</h6>
              <p>
              <span className='success-color'><i class="bi bi-quote"></i></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor. Nulla facilisi. Nam sit
                amet lacinia nisl. Morbi gravida ipsum a est venenatis, eget
                imperdiet lectus commodo.<span className='success-color'><i class="bi bi-quote"></i></span>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item">
              <img
                src={client2}
                className="img-circle"
                alt="testimonial"
              />
              <h4>Shristy</h4>
              <h6>Photomatci - Travel</h6>
              <p>
              <span className='success-color'><i class="bi bi-quote"></i></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor. Nulla facilisi. Nam sit
                amet lacinia nisl. Morbi gravida ipsum a est venenatis, eget
                imperdiet lectus commodo.<span className='success-color'><i class="bi bi-quote"></i></span>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item">
              <img
                src={client3}
                className="img-circle"
                alt="testimonial"
              />
              <h4>Vikas</h4>
              <h6>Photomatci - Wedding</h6>
              <p>
                <span className='success-color'><i class="bi bi-quote"></i></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor. Nulla facilisi. Nam sit
                amet lacinia nisl. Morbi gravida ipsum a est venenatis, eget
                imperdiet lectus commodo.<span className='success-color'><i class="bi bi-quote"></i></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* resiger now section  */}
      <div className='register-now text-center'> 
          <h1>Are You Professional Photographer?</h1>
          <button className='btn'>Register Now</button>
      </div>

      {/* count section  */}
      <div className='container mt-5 text-center'> 
          <div className='row'>
            <div className='col-md-3'>
              <div className="count">
                <h1>230</h1>
                <p>Cities</p>
              </div>
            </div>
            <div className='col-md-3'>
            <div className="count">
                <h1>1050</h1>
                <p>Total Studios</p>
              </div>
            </div>
            <div className='col-md-3'>
            <div className="count">
                <h1>490</h1>
                <p>Albums</p>
              </div>
            </div>
            <div className='col-md-3'>
            <div className="count">
                <h1>2200</h1>
                <p>Total reviews</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
