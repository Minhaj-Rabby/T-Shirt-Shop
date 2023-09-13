import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

const Special = () => {
    const ring=useContext(RingContext);
  return (
    <div>Special
        <p>Ring:{ring}</p>
    </div>
  )
}

export default Special