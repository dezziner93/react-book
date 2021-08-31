import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {

  

  render() {
    return (
      <div>
        
      <header>
          
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 d-flex justify-content-center align-self-center">
                <h1 className="my-3"><i class="fa fa-book" aria-hidden="true"></i> Book Store</h1>
              </div>
              <div className="col-md-4 d-flex justify-content-end align-self-center">
                <a className="btn btn-primary"> <i class="fa fa-plus" aria-hidden="true"></i> Add Book</a>
              </div>
            </div>
          </div>
      </header>

        

      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;