import React, { Component } from 'react'

export class Cards extends Component {
  render() {
    return (
     <div className="cards d-flex justify-content-between" style={{backgroundColor:this.props.bcolor}}>
        <img src={this.props.cardurl} alt="" />
         <div className='kard p-0 m-0'>
        <h3>{this.props.cardtitle}</h3>
        <p >Lorem ipsum dolor    sit amet consectetur adipisicing elit. Optio, magnam necessitatibus dicta itaque laborum sequi?</p>
      </div>
     </div>
    )
  }
}

export default Cards