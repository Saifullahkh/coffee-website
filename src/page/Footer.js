import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import {FaFacebookF, FaInstagram,FaTiktok} from 'react-icons/fa'
function Footer() {
  return (
    <div className='container-fluid bg-dark py-5' id='footer'>
      <div className="row">
        <h1 className='text-white text-center'>Coffee<span className='text-danger'>.</span>co</h1>
        <p className='text-center text-secondary'>The  best place to work <br />and be more productive.</p>
      </div>
      <div className="row my-3 justify-content-center">
        <div className="col-md-2">
            <h3 className='text-white'>Address</h3>
            <p className='text-secondary'>Distt Hangu <br />M.khawaja</p>
        </div>
        <div className="col-md-2">
            <h3 className='text-white'>Contact</h3>
            <p className='text-secondary'>+92 335 9199919 <br />atifullahkhan47@gmail.com</p>
        </div>
        <div className="col-md-2">
            <h3 className='text-white'>Office</h3>
            <p className='text-secondary'>Monday - Friday<br />9AM - 10PM</p>
        </div>
        <div className="col-md-3">
            <p className='text-secondary'>Subscribe to our newsletter</p>
            <div className="d-flex flex-row">
              <input type="text" placeholder='your email address' className='form-control' />
              <span className='bg-danger text-white rounded p-2 fs-3 ms-1'><FiArrowUpRight /></span>
            </div>
        </div>
      </div>

      <hr  className='text-white w-75 mx-auto my-4'/>

      <div className="row d-flex justify-content-around">
        <div className="col-md-3 ">
          <ul className="nav d-flex column-gap-4">
            <li><a href="" className='text-white fs-5'><FaFacebookF /></a></li>
            <li><a href="" className='text-white fs-5'><FaInstagram /></a></li>
            <li><a href="" className='text-white fs-5'><FaTiktok /></a></li>
          </ul>
        </div>
        <div className="col-md-3 ">
          <p className='text-secondary'>Copy2023@Design by Saif Ullah Khan</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
