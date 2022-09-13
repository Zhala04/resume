import React, { Component } from 'react';
import koala from '../imgs/koala.jpg'

export class Page3 extends Component {
  render() {
    return (
      <div className='fr'>
        <h1 className='ab-title'>Blogs</h1>
       <div className="row mt-4">
       <div className="card mb-4" style={{width: '20rem', marginRight:'3rem', background:'#FCF4FF',paddingTop:'.8rem'}}>
        <img src="https://bostamireact.ibthemespro.com/static/media/1.5da97bc494017804e9df.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-text">How to Own Your Audience by Creating an Email List.</h4>
        </div>
      </div>
       <div className="card mb-4" style={{width: '20rem', marginRight:'0rem',paddingTop:'.8rem',background:'#EEFBFF'}}>
        <img src="https://bostamireact.ibthemespro.com/static/media/4.0e4876b305a3d30ecf1e.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-text">Everything You Need to Know About Web Accessibility.</h4>
        </div>
      </div>
       <div className="card" style={{width: '20rem', marginRight:'3rem',paddingTop:'.8rem', background:'#FFF0F0'}}>
        <img src="https://bostamireact.ibthemespro.com/static/media/2.2a5042442f4461042991.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-text">HThe window know to say beside you</h4>
        </div>
      </div>
       <div className="card" style={{width: '20rem', marginRight:'0rem',paddingTop:'.8rem',background:'#FCF4FF'}}>
        <img src={koala} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-text">Top 10 Toolkits for Deep Learning in 2021.</h4>
        </div>
      </div>
       </div>
      </div>
    )
  }
}

export default Page3