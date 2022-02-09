import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return( 
  <div className={s.item}>
    <img src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'></img>
   { props.message}
   
    <div>
    <span>Like </span> {props.likesCount}
    </div>
  </div>
  ) 

}

export default Post;

//const Header = () => {        
  //return (<div>
    //<a>kjcwjc</a>
   // <a>hwdcbwhdc</a>
    //<a>wkjdcbwdc</a>
  
  //</div>);
//}

//let obj ={
 // name: 'Dima'
//}
//Header (obj );

//<Header/>
//<Header name='Dima K' />
//<Header name='Dima K' age='30' />    


//const Header = (props) => {
  //return (<div>
    //<span> {props.name} , {props.age}</span>
    //<a></a>
    //<a></a>
    //<a></a>

 // </div>)