import React from 'react';
import "../App.css"


function Product () {
  return (
    <div className="container">
      <div className="row">
        <h2 className="my-5 underline">
          Find delicious food and <br />choose what you love
        </h2>
        <div className="col">
          <ul className="nav d-flex gap-4">
            <li className="nav-items">
              <a href="#menu" className="nav-link fs-4 text-dark">Main Menu</a>
              <span className='ms-3'>4 products</span>
            </li>
            <li className="nav-items">
              <a href="#coffee" className="nav-link fs-4 text-dark">Coffee</a>
              <span className='ms-3'>3 products</span>
            </li>
            <li className="nav-items">
              <a href="" className="nav-link fs-4 text-dark">Desserts</a>
              <span className='ms-3'>4 products</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
