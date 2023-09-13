import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const MoneyContext = createContext(0);
export const RingContext = createContext('');

const Grandpa = () => {
  const [money, setMoney] = useState(0);
  return (
    <div className='grandpa'>
      <h2>Grandpa </h2>
      <h2>Money: {money} </h2>
      <RingContext.Provider value={'Platinum'}>
        <MoneyContext.Provider value={[money, setMoney]}>
          <section className='flex'>
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </MoneyContext.Provider>
      </RingContext.Provider>

    </div>
  )
}

export default Grandpa