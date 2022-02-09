import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div>
    <div>
      <img src='https://w-dog.ru/wallpapers/10/0/509300661331552/pejzazhi-priroda-trava-xolmy-svet-utro-oblako-oblaka.jpg'></img>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />


  </div>
}

export default Profile;