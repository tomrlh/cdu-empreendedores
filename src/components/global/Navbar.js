import React from 'react'

function Navbar() {
  return <div className="header">
    <div className="container">
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="navbar-header">
          <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#" className="navbar-brand scroll-top"><em>T</em>inker</a>
        </div>
        <div id="main-nav" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#" className="scroll-top">Home</a></li>
            <li><a href="#" className="scroll-link" data-id="about">About Us</a></li>
            <li><a href="#" className="scroll-link" data-id="portfolio">Portfolio</a></li>
            <li><a href="#" className="scroll-link" data-id="blog">Blog</a></li>
            <li><a href="#" className="scroll-link" data-id="contact-us">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
}

export default Navbar