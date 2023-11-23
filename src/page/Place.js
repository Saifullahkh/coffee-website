import React from 'react'
import place1 from '../Asset/place1.jpg'
import '../App.css'


function Place() {
  return (
    <div className='container mb-4' id='place'>
      <div className="row justify-content-center">
        <h2 className='my-5 underline'>Make you feels good With <br />our comfy fasilities</h2>
        <div className="col-md-5">
            <img src={place1} alt=""  />
        </div>
        <div className="col-md-5" style={{marginTop: '100px'}}>
            <h4 className='fw-bolder'>Find a place you love</h4>
            <p>we provide the best place to stay productive <br />and focus with good vibes and beautiful design.</p>
        </div>
      </div>
    </div>
  )
}

export default Place
