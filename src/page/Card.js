import React from 'react'

function Card({card,img, title,text,btn}) {
  return (
    <div>
      <div class={card}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{text}</p>
            <a href="#" className='btn'>{btn}</a>
        </div>
     </div>
    </div>
  )
}

export default Card
