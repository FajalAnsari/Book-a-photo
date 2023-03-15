
import React, { useState, useEffect } from 'react';
import "../Hero/Hero.css";
import trevelicone from "../images/icones/travel-luggage.png";
import fashionicon from "../images/icones/fashion.png";
import compercialicon from "../images/icones/hamburger.png";
import natureicon from "../images/icones/landscape.png";
import weddingicon from "../images/icones/wedding-rings.png";

const texts = ['Anniversary', 'Wedding', 'Commercial'];



function Hero() {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [shouldWait, setShouldWait] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (shouldWait) {
                setShouldWait(false);
                setCurrentLetterIndex(0);
                setCurrentText('');
                setCurrentIndex((currentIndex + 1) % texts.length);
                return;
            }

            if (currentLetterIndex === texts[currentIndex].length) {
                setShouldWait(true);
                return;
            }

            const letter = texts[currentIndex][currentLetterIndex];
            setCurrentText(currentText => currentText + letter);
            setCurrentLetterIndex(currentLetterIndex + 1);
        }, 200);

        return () => clearInterval(intervalId);
    }, [currentIndex, currentLetterIndex, shouldWait]);

    return (
        <>
            <div className="hero-section">
                <div className='row  mt-5 w-50 mx-auto'>
                    <div className='col-md-8  mx-auto cat-search text-center'>
                        <h1>Book A Shoot</h1>
                        <p> Book <span className='text-warning'>{currentText} |</span> PhotoShoot Today</p>
                        <form className='d-flex'>
                            <input className="form-control mt-2 me-2 p-2" type="text" placeholder='What are you looking for?' list='category-suggetions'/>
                            <datalist id='category-suggetions'>
                                <option value="Fashion Photography"></option>
                                <option value="Portfolio Photography"></option>
                                <option value="Art & History"></option>
                                <option value="Gym & Fitness"></option>
                                <option value="Sports Photography"></option>
                            </datalist>
                            <div class="input-group">
                                <input type="text" class="form-control mt-2 p-2" placeholder="Locaction" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-dark mt-2" type="button" id="button-addon2"><i class="bi bi-geo-alt"></i></button>
                            </div>
                            <button className='btn btn-dark mt-2 ms-2 pl-5'>Search</button>
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

