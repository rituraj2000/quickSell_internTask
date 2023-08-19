import React from 'react'

import "./css/Container.css"
import profilePic from "../Assets/images/profile.png"
import { useState } from 'react'

const Container = ({id,title,tag,user}) => {

  const[pic,setPic]=useState( Math.floor(Math.random() * 99) + 1)

  const changePicture=()=>{

  }
  return (
    <div className='card-container'>
      <div className='top-section'>
        <p>{id}</p>
        <div className='profile-container'>
          <img src={`https://randomuser.me/api/portraits/men/${pic}.jpg`} className='profile-pic' />
          <span className={`status ${user[0].available? 'available' : 'notAvailable'}`} ></span>
        </div>
      </div>
      <div className='title-container'>
        <h1>{title}</h1>
      </div>
      <div>
        <div className='bottom-section'>
          <span className='circle'></span>
          <p>{tag}</p>
        </div>
      </div>
    </div>
  )
}

export default Container