import React, { useContext } from 'react'
import Cousin from '../Cousin/Cousin'
import { MoneyContext } from '../Grandpa/Grandpa'

const Uncle = () => {
  const [money,setMoney]=useContext(MoneyContext);
  return (
    <div>
      <h2>Money: {money}</h2>
      <h2>Uncle</h2>
      <button onClick={()=>setMoney(1000+money)}>Add 1000</button>
      <section className='flex'>
        <Cousin>Nabil</Cousin>
        <Cousin hasFriend={true}>Nabila</Cousin>
      </section>

    </div>

  )
}

export default Uncle