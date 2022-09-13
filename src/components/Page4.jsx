import React, { Component } from 'react'

export class Page4 extends Component {
  render() {
    return (
      <div className='cntc'>
        <h1 className='ab-title'>Contact</h1>
        <div className="contact mt-4">
        <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
       
        <button type="submit" className="btn btn-light btn-outline-dark mt-4">Submit</button>
      </form>

        </div>
      </div>
    )
  }
}

export default Page4