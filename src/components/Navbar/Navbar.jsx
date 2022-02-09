import React from 'react';
import s from './Navbar.module.css';

//let s ={
//'nav': 'Navbar_nav__21-B9',
//'item': 'Navbar_item__fJmrd'
//}


const Navbar = () => {
  return <nav className={s.nav}>
    <div class={s.item}>
      <a href ="/profile">Profile</a>
    </div>
    <div class={`${s.item} ${s.active}`}>
     <a href ="/dialogs">Messages</a>
    </div>
    <div class={s.item}>
      <a href ="/News">News</a>
    </div>
    <div class={s.item}>
      <a href ="/music">Music</a>
    </div>
    <div class={s.item}>
      <a href ="/setting">Settings</a>
    </div>
  </nav>
}
export default Navbar;