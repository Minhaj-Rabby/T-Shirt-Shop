import React from 'react'
import './Tshirt.css'

const Tshirt = ({ tshirt, handleAddToCart }) => {
    const { _id, price, picture, name, gender } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt={name} />
            <h4>Name: {name}</h4>
            <p>Price:${price}</p>
            <button onClick={() => handleAddToCart(tshirt)} className='btn-buy-now'>Buy Now</button>
        </div>
    )
}

export default Tshirt