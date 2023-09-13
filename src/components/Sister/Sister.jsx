import React, { useContext } from 'react'
import { MoneyContext } from '../Grandpa/Grandpa'

const Sister = () => {
  const [money,setMoney]=useContext(MoneyContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>Money: {money}</p>
      <button onClick={()=>setMoney(1000+money)}>Add 1000</button>
    </div>
  )
}

export default Sister