import React from 'react'
import Card from './Card'
import '../App.css'
import coffeebeans from '../Asset/coffee-beans.png';
import hotdrink from '../Asset/hot-drink.png';
import coffeecup from '../Asset/coffee-cup.png';

function Special() {
  return (
    <div className='container'>
       <div className="row d-flex justify-content-center">
        <h2 className="my-5 underline">
          Best Coffee that make you <br />happy and cheer you up.
        </h2>
        <div className="col-md-4 card1">
          <Card
            card={'card border-0'}
            img={coffeebeans}
            title={'Original Coffee'}
            text={'We select the best beans coffee,for a true taste.'}
          />
        </div>
        <div className="col-md-4 card1 ">
          <Card
            card={'card border-0'}
            img={hotdrink}
            title={'Hot Coffee'}
            text={'Enjoy your coffee with some hot with true taste.'}
          />
        </div>
        <div className="col-md-4 card1 ">
          <Card
            card={'card border-0'}
            img={coffeecup}
            title={'Ice Coffee'}
            text={'Enjoye your coffee some ice with true taste.'}
          />
        </div>

      </div>
    </div>
  )
}

export default Special
