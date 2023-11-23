import React from 'react'
import Card from './Card'
import { AiOutlineShopping } from "react-icons/ai";
import menu1 from '../Asset/main-menu1.jpg'
import menu2 from '../Asset/main-menu2.jpg'
import menu3 from '../Asset/main-menu3.jpg'
import menu4 from '../Asset/main-menu4.jpg'
import coffee from '../Asset/coffee.jpg'
import coffee2 from '../Asset/coffee2.jpg'
import coffee3 from '../Asset/coffee3.jpg'
import dessert1 from '../Asset/dessert1.jpg'
import dessert2 from '../Asset/dessert2.jpg'
import dessert3 from '../Asset/dessert3.jpg'
import dessert4 from '../Asset/dessert4.jpg'
import '../App.css'


function Menu() {
  return (
    <div className='container my-4' id='menu'>
      <div className="row row-gap-4">
        <div className="col-md-4 card2">
            <Card 
                card={'card'}
                img={menu1}
                title={'$5'}
                text={'Cookies'}
                btn={<AiOutlineShopping/>}
            />
             
        </div>
        <div className="col-md-4 card2">
            <Card 
                card={'card'}
                img={menu2}
                title={'$6'}
                text={'Croissant'}
                btn={<AiOutlineShopping/>}
            />
        </div>
        <div className="col-md-4 card2">
           <Card 
                card={'card'}
                img={menu3}
                title={'$4'}
                text={'Croissant'}
                btn={<AiOutlineShopping/>}
            />
        </div>
        <div className="col-md-4 card2">
            <Card 
                card={'card'}
                img={menu4}
                title={'$5'}
                text={'Cookies'}
                btn={<AiOutlineShopping/>}
            />
        </div>
        <div className="col-md-4 card2">
            <Card 
                card={'card'}
                img={coffee}
                title={'$7'}
                text={'Black Coffee'}
                btn={<AiOutlineShopping/>}
            />
        </div>
        <div className="col-md-4 card2">
           <Card 
                card={'card'}
                img={coffee2}
                title={'$12'}
                text={'Pure Coffee'}
                btn={<AiOutlineShopping/>}
            />
        </div>
        <div className="col-md-4 card2">
            <Card 
                card={'card'}
                img={coffee3}
                title={'$9'}
                text={'Milk Coffee'}
                btn={<AiOutlineShopping/>}
            />
        </div>
        <div className="col-md-4 card2">
            <Card 
                card={'card'}
                img={dessert1}
                title={'$6'}
                text={'Cream dessert'}
                btn={<AiOutlineShopping/>}
            />
        </div>
        <div className="col-md-4 card2">
           <Card 
                card={'card'}
                img={dessert2}
                title={'$5'}
                text={'Chocolat Croissant'}
                btn={<AiOutlineShopping/>}
            />
        </div>
        <div className="col-md-4 card2">
           <Card 
                card={'card'}
                img={dessert3}
                title={'$15'}
                text={'Pandessert'}
                btn={<AiOutlineShopping/>}
            />
        </div>
        <div className="col-md-4 card2">
           <Card 
                card={'card'}
                img={dessert4}
                title={'$12'}
                text={'Milk dessert'}
                btn={<AiOutlineShopping/>}
            />
        </div>
      </div>
      <div>
       
      </div>
    </div>
  )
}

export default Menu
