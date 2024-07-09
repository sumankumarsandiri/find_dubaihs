import React from 'react'
import Congratulationsimg from '../assets/images/Password Set FD.png'

export default function Congratulations() {
  return (
    <div>
        <img src={Congratulationsimg} alt='congratulationsimg' className='congratulations-img'style={{
            width:"100%",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}></img>
      
    </div>
  )
}
