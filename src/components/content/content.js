import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {

  render() {
    return (
      <div>
        <div className="content">
          <div className="container">
            
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae.</td>
                  <td>
                    <a className="mx-1" href="#">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                    <a className="mx-1" href="#">
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>
                    <a className="mx-1" href="#">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                    <a className="mx-1" href="#">
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius id rem tempore alias dolorum.</td>
                  <td>
                    <a className="mx-1" href="#">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                    <a className="mx-1" href="#">
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    );
  }
}

Content.propTypes = {

};

export default Content;