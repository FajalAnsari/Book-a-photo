import React from 'react';
import "../Hero/Hero.css";
import trevelicone from "../images/icones/travel-luggage.png";
import fashionicon from "../images/icones/fashion.png";
import compercialicon from "../images/icones/hamburger.png";
import natureicon from "../images/icones/landscape.png";
import weddingicon from "../images/icones/wedding-rings.png";


function Hero() {
    return (
        <>
            <div className="hero-section">
                <div className='row  mt-5 w-50 mx-auto'>
                    <div className='col-md-8  mx-auto cat-search text-center'>
                        <h1>Book A Shoot</h1>
                        <p>Book <span className='text-success'>Pashion |</span> PhotoShoot Today</p>
                        <form className='d-flex'>
                            <input class="form-control m-2 p-2" type="text" placeholder='Select category' />
                            <input class="form-control m-2 p-2" type="text" placeholder='Enter City' />
                            <button className='btn btn-dark m-2 pl-5'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='services-icone bg-light'>
                <div className="row w-75 mx-auto text-center">
                    <div className='col'>
                        <div className='icon-box'>
                        <img src={trevelicone} alt="travel icone" />
                        <p>TAVEL</p>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='icon-box'>
                        <img src={weddingicon} alt="travel icone" />
                        <p>WEDDING</p>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='icon-box'>
                        <img src={natureicon} alt="travel icone" />
                        <p>SPECIAL OCCACION</p>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='icon-box'>
                        <img src={trevelicone} alt="travel icone" />
                        <p>BABIES & KIDS</p>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='icon-box'>
                        <img src={compercialicon} alt="travel icone" />
                        <p>COMERCIAL</p>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='icon-box'>
                        <img src={fashionicon} alt="travel icone" />
                        <p>FASHION & PORTFOLIO</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;



