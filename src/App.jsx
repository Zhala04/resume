import React, { useState } from 'react';
import Item from './components/Item';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import bostami from './imgs/bostami.png';
import { useRef } from 'react';

// const components={
//   'page1':Item,
//   'page2':Page2
// }

const App = ({func1,func2}) => {
  const lref=useRef();
  const mref=useRef();
  
  const [isClicked, setIsClicked] = useState(false)

  function myFunction() {
  
    // lref.current.style.backgroundColor='black'
    // lref.current.style.color='grey'
    // mref.current.style.backgroundColor='black'
    // mref.current.style.color='grey'

    // element.classList.toggle("dark");

    setIsClicked(isClicked => !isClicked);
  }


  const alma=()=>{
    setPage(page=<Page2 />)
  }
  const armud=()=>{
    setPage(page=<Item/>)
  }
  const nar=()=>{
    setPage(page=<Page3/>)
  }
  const heyva=()=>{
    setPage(page=<Page4/>)
  }
  let [page, setPage]= useState(<Item />);
  return (
    <div className={isClicked ? "main main-dark" : 'main'}>
      <div className="container">
        <img src={bostami} alt="" className='mt-5' />
        <button className='btn btn-dark ms-5 mt-5' onClick={myFunction}>{isClicked ? "☾" : "☼"}</button>
      </div>
      <div className={isClicked ? "left-main dark" : 'left-main'} ref={lref}>
        <div className="girl">
          <img src="https://bostamireact.ibthemespro.com/static/media/avatar.418c8afc380507acd425.jpg" alt="" width='240px'height='240px' />
        </div>
        <h2 className='text-center'>Monalisa Ashley</h2>
        <span className='text-center'><p>Ui/Ux Designer</p></span>
        <div className="phone">
          <div className="ph">
            <div className="ph-con">
              Phone <br/>
              <b>+123 456 7890</b>
            </div>
          </div>
          <div className="ph">
            <div className="ph-con">
              Email <br/>
              <b>example@mail.com</b>
            </div>
          </div>
          <div className="ph">
            <div className="ph-con">
              Location <br/>
              <b>Hong kong china</b>
            </div>
          </div>
          <div className="ph">
            <div className="ph-con">
              Birthday <br/>
              <b>May 27, 1990</b>
            </div>
          </div>
        </div>
        <button className='btn cv'>Download CV</button>
      </div>
      <div className="b-div d-flex justify-content-center align-items-center">
        <button className='btn btn-light mx-2 d-flex flex-column  align-items-center' onClick={armud}><i class="fa-solid fa-user fa-2x"></i>About</button>
        <button className='btn btn-light mx-2 d-flex flex-column  align-items-center' onClick={alma}><i class="fa-solid fa-file-lines fa-2x"></i>Resume</button>
        <button className='btn btn-light mx-2 d-flex flex-column  align-items-center' onClick={nar}><i class="fa-brands fa-blogger-b fa-2x"></i>Blogs</button>
        <button className='btn btn-light mx-2 d-flex flex-column  align-items-center' onClick={heyva}><i class="fa-solid fa-address-book fa-2x"></i>Contact</button>
        

        </div>
      {page}
    </div>
  )
}

export default App
