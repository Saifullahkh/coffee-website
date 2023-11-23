import React from 'react'
import Card from './Card'
import '../App.css'
import {FiArrowUpRight} from 'react-icons/fi'
import blog1 from '../Asset/blog1.jpg'
import blog2 from '../Asset/blog2.jpg'

function Blog() {
  return (
    <div className='container mb-5' id='blog'>
      <div className="row justify-content-center column-gap-5">
        <h2 className='my-5 underline'>Our blogs coffee with <br />insightful topic</h2>
        <div className="col-md-5 card2">
            <Card 
                card={'card border-0'}
                img={blog1}
                title={'How to grow coffee beans'}
                text={'The blogs about coffee will help you a lot about how to grow coffee beans with high standard'}
                btn={<FiArrowUpRight />}
            />
        </div>
        <div className="col-md-5 card2">
            <Card 
                card={'card border-0'}
                img={blog2}
                title={'How to make coffee for beginner'}
                text={'The blogs about coffee will help you a lot about how to make coffee with good place coffee. '}
                btn={<FiArrowUpRight />}

            />
        </div>
      </div>
    </div>
  )
}

export default Blog
