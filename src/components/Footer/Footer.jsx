import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales nisl ac mauris lacinia, eget tempus massa lobortis. Donec porttitor nisi eu velit tincidunt maximus. Duis blandit purus eget est laoreet.</p>
          </div>
          <div className="col-md-4">
            <h4>Recent Posts</h4>
            <ul className="list-unstyled">
              <li><a href="/"><i class="bi bi-instagram"></i></a></li>
              <li><a href="/"><i class="bi bi-linkedin"></i></a></li>
              <li><a href="/"><i class="bi bi-twitter"></i></a></li>
              <li><a href="/"><i class="bi bi-youtube"></i></a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>123 Main St.<br />New York, NY 10001<br />(123) 456-7890<br />example@example.com</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <p>&copy; 2023 Bookaphoto. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
