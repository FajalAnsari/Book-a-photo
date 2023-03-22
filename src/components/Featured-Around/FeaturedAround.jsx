import React from 'react';
import "../Featured-Around/FeaturedAround.css"
import featuredimg1 from "../images/featured-img/featured1.jpg";
import featuredimg2 from "../images/featured-img/featured2.jpg";
import featuredimg3 from "../images/featured-img/featured13.jpg";
import featuredimg4 from "../images/featured-img/featured14.jpg";

function Featuredaround() {
  const box = document.querySelector(".media-scroller-around");
  const handlePre = () => {
    let width = box.clientWidth;
    console.log(width)
    box.scrollLeft = box.scrollLeft - width;
  }
  const handleNext = () => {
    let width = box.clientWidth;
    console.log(width)
    box.scrollLeft = box.scrollLeft + width;
  }
  return (
    <>
      <div className="featured-around-container bg-light text-center">
        <span className='pt-3'> Best Photographers Arround You </span> 
        <button  onClick={handlePre} className='btn preview'><i className="bi bi-arrow-left-circle-fill text-warning"></i></button>
        <button onClick={handleNext} className='btn next'><i className="bi bi-arrow-right-circle-fill text-warning"></i></button>
        <div className='media-scroller-around mx-auto'>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
          <div className="medial-element-around">
            <div className='card'>
              <img src={featuredimg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photomatic</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt me-2 text-success"></i>Mumbai, Maharastra<br /><i className="bi bi-telephone me-2 text-success"></i>70050410014<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Featuredaround;
