import React, { Component } from 'react'
import Header from './../header/header';
import { Table } from 'react-bootstrap';

class Content extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList()
  }

  returnList() {
    if (localStorage.getItem('transactions') == null)
      localStorage.setItem('transactions', JSON.stringify([]))
    return JSON.parse(localStorage.getItem('transactions'))
  }

  handleEdit = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  handleDelete = (index) => {
    var list = this.returnList()
    list.splice(index, 1);
    localStorage.setItem('transactions', JSON.stringify(list))
    this.setState({ list, currentIndex: -1 })
  }

  onAddOrEdit = (data) => {
    var list = this.returnList()
    if (this.state.currentIndex == -1)
      list.push(data)
    else
      list[this.state.currentIndex] = data
    localStorage.setItem('transactions', JSON.stringify(list))
    this.setState({ list, currentIndex: -1 })
  }


  render() {
    return (
      <div>

        

        <div className="content">
          <div className="container">

            <Header
          currentIndex={this.state.currentIndex}
          list={this.state.list}
          onAddOrEdit={this.onAddOrEdit}
        />

            <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">bookPrice</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list.map((item, index) => {
                      return <tr key={index}>
                        <td>{item.bookNo}</td>
                        <td>{item.bookName}</td>
                        <td>{item.bookDesc}</td>
                        <td>{item.bookPrice}</td>
                        <td><a className="mx-1" onClick={() => this.handleEdit(index)}><i class="fa fa-pencil" aria-hidden="true"></i></a> <a className="mx-1" onClick={() => this.handleDelete(index)}><i class="fa fa-trash-o" aria-hidden="true"></i></a>

                        </td>
                      </tr>
                    })}
                  </tbody>
                </Table>
         
      
            
        </div>
        </div>
      </div>
    )
  }
}

export default Content
