import React from 'react';
import "../section/Section.css";

function Section() {
    return (
        <div className="container">
            <div className='row text-center mt-4'>
                <h2>How It Works</h2>
                <div className="col-md-4">
                    <div className="how-it-box">
                        <span className='circle'><i class="fa-solid fa-magnifying-glass"></i></span>
                        <h4>Search</h4>
                        <p>Search for your perfect Photographer based on your location, category and price range.</p>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="how-it-box">
                        <span className='circle'><i class="fa-solid fa-heart"></i></span>
                        <h4>Shortlist</h4>
                        <p>Search for your perfect Photographer based on your location, category and price range.</p>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="how-it-box">
                        <span className='circle'><i class="fa-solid fa-book"></i></span>
                        <h4>Book</h4>
                        <p>Shortlist Photographers you like based on their albums, packages and reviews to keep track.</p>
                    </div>
                </div>
            </div>
            <p>We have listings of Phone Number, Albums, Packages and Reviews of Best Photographers from all over India for Wedding, Babies, Kids, Pre Wedding, Maternity, Anniversary, Commercial, Food, Restaurant, Corporate Events, Fashion, Portfolio, Nature and Travel Photography.</p>
        </div>
    );
}

export default Section;
