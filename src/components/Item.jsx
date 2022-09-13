import React, { Component } from 'react';
import '../css/item.css';
import Cards from './Cards';
import { useRef } from 'react';
import isClicked from '../App';

export class Item extends Component {
  render() {
    return (
      <div className='sec' >
 
        <h1 className='ab-title'>About Me</h1>
        <p className='mt-4 mb-5'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.<br/><br/>

My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
<h1>What I Do!</h1>
<div className="cards-con row">
<Cards cardtitle='Ui/Ux Design' bcolor='#FCF4FF' cardurl="https://bostamireact.ibthemespro.com/static/media/icon-1.71b741a6ab73765534e80db0a934febd.svg" />
<Cards cardtitle='App Development' bcolor='#FEFAF0' cardurl="https://bostamireact.ibthemespro.com/static/media/icon-2.cbff424c7b23532c3f955e6f747ee1fa.svg" />
<Cards cardtitle='Photography' bcolor='#FCF4FF' cardurl="https://bostamireact.ibthemespro.com/static/media/icon-3.c226edafbaa53ebea0decda25185b879.svg" />
<Cards cardtitle='Photography' bcolor='#FFF4F4' cardurl="https://bostamireact.ibthemespro.com/static/media/icon-4.6989ae67f415633aa2e1e3fd2e3c15a1.svg" />
<Cards cardtitle='Management' bcolor='#FFF4F4' cardurl="https://bostamireact.ibthemespro.com/static/media/icon-5.b7ce008f06241f1d51b48260af8b73f4.svg" />
<Cards cardtitle='Web Development' bcolor='#F3FAFF' cardurl="https://bostamireact.ibthemespro.com/static/media/icon-6.7a458dd3dce6df96d462489320d4a456.svg" />

</div>
      </div>
    )
  }
}

export default Item