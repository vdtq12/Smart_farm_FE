import React from 'react'
import humidity from "./humid.webp"
import temperature from "./temp.webp"
import watering from "../components/CurrentData/Watering.webp"
import '../styles/home.css'
import { NavBar } from '../components'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='contenthome'>
        <img src={watering} alt="wtring" />
        <div className='linechart'>
          <img src={humidity} alt="humidity" />
          <img src={temperature} alt="temperature" />
        </div>
      </div>
    </div>
  )
}

export default Home
