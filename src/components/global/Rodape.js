import React from 'react'

function Rodape() {
  return <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="logo">
            <a className="logo-ft scroll-top" href="#"><em>T</em>inker</a>
            <p>Copyright &copy; 2017 Your Company 
            <br/>Design: templatemo</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="location">
            <h4>Location</h4>
            <ul>
              <li>30 Raffles Ave, <br/>Singapore 039803</li>
              <li>1 Republic Blvd, <br/>Singapore 038975</li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-12">
          <div className="contact-info">
            <h4>More Info</h4>
            <ul>
              <li><em>Phone</em>: 090-090-0320</li>
              <li><em>Email</em>: tk@company.co</li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-12">
          <div className="connect-us">
            <h4>Get Social with us</h4>
            <ul>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-google"></i></a></li>
              <li><a href="#"><i className="fa fa-rss"></i></a></li>
              <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Rodape