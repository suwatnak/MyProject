import React, { Component } from 'react'

class FormCompnent extends Component {
  render() {
    return (
      <div>
        <h2>Address Form</h2>
        <form>
          <div className="form-group">
            <lable htmlFor="name">name</lable>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <lable htmlFor="address">Address</lable>
            <input type="text" className="form-control" id="address" />
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    )
  }
}

export default FormCompnent;