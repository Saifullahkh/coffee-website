import React from 'react'
import Card from './Card'
import './Home.css'


function Home() {
  return (
    <div className='container' id='home'>
      <div className="row d-flex justify-content-center">
          <h2 className='text-white text-center'>Start Your Day <br />With Favorite Coffee <br />And Cozy Place.</h2>
          <div className='text-center mt-4'>
          <button className='btn btn-danger '>Order Now</button>
          </div>
      </div>
      
    </div>
  )
}

export default Home
