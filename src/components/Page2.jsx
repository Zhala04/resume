import React, { Component } from 'react'

export class Page2 extends Component {
  render() {
    return (
      <div className='thr'>
        <h1 className='ab-title'>Resume</h1>
        <div className="re-cards row mt-5">
            <div className="phd" style={{backgroundColor:'#FFF4F4'}}>
                <span>2021-2023</span>
                <h4>Ph.D in Horriblensess</h4>
                ABC University, Los Angeles, CA
            </div>
            <div className="phd" style={{backgroundColor:'#EEF5FA'}}>
                <span>2017-2021</span>
                <h4>Computer Science</h4>
                Imperialize Technical Institute
            </div>
            <div className="phd" style={{backgroundColor:'#FFF1FB'}}>
                <span>2019-Present</span>
                <h4>Sr. Software Tester</h4>
                Google Inc.
            </div>
            <div className="phd" style={{backgroundColor:'#F2F4FF'}}>
                <span>2021-2023</span>
                <h4>Cr. Web Developer</h4>
                ib-themes ltd.

            </div>
            <div className="phd" style={{backgroundColor:'#FFF4F4'}}>
                <span>2021-2023</span>
                <h4>Best Developer</h4>
                University Of Melbourne, NA
            </div>
            <div className="phd" style={{backgroundColor:'#EEF5FA'}}>
                <span>2021-2023</span>
                <h4>Best Writter</h4>
                Online Typodev Soluation Ltd.
            </div>
        </div>
        
      </div>
    )
  }
}

export default Page2