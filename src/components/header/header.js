import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';

class Header extends Component {


  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: this.props.show,
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  state = {
    ...this.returnStateObject()
  }

  returnStateObject() {
    if (this.props.currentIndex == -1)
      return {
        bookNo: '',
        bookName: '',
        bookDesc: '',
        bookPrice: ''
      }
    else
      return this.props.list[this.props.currentIndex]
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
      this.setState({ ...this.returnStateObject() })
      console.log(prevProps, this.props)
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddOrEdit(this.state)
  }


  render() {
    return (

      

      <div>
        <header>
          
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <h1 className="my-3"><i class="fa fa-book" aria-hidden="true"></i> Book Store</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam expedita temporibus quo voluptate fugit incidunt omnis amet corrupti deserunt dicta quas, maiores ullam, repellat soluta <br/>
                  autem! Voluptatem, numquam architecto. Reiciendis, quos corrupti. Sequi iusto commodi inventore cupiditate eligendi. Earum nihil quod beatae saepe obcaecati officia voluptas non perspiciatis, minus fuga!</p>
               
              </div>
              <div className="col-md-3">

                <Form onSubmit={this.handleSubmit} autoComplete="off">

                  <Form.Group className="mb-1 mt-3" controlId="formBasicEmail">
                    <Form.Control name="bookNo" placeholder="Enter Book Number" onChange={this.handleInputChange} value={this.state.bookNo} />
                  </Form.Group>

                  <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Control name="bookName" placeholder="Enter Book Name" onChange={this.handleInputChange} value={this.state.bookName} />
                  </Form.Group>

                  <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Control name="bookDesc" placeholder="Enter Book Description" onChange={this.handleInputChange} value={this.state.bookDesc} />
                  </Form.Group>

                  <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Control name="bookPrice" placeholder="Enter Book Price" onChange={this.handleInputChange} value={this.state.bookPrice} />
                  </Form.Group>

                 
                  <Button className="w-100 mb-3" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>

                {/* <button className="btn btn-primary" onClick={this.handleShow}> <i class="fa fa-plus" aria-hidden="true"></i> Add Book</button> */}
              </div>
            </div>
          </div>
      </header>


    
      
        
      
        {/* <Modal show={this.state.show} onHide={this.handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>

            <Modal.Body>


              <Form.Group className="mb-3">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" id="bookname" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Book Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Description" id="bookdescription" />
              </Form.Group>

            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
              <Button type="submit" value="Login" >Add Book</Button>
            </Modal.Footer>
          </Form>
        </Modal> */}

      </div>




    )
  }
}

export default Header


