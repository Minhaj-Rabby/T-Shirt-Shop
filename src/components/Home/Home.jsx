import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  return (
    <div>Home</div>
  )
}

export default Home