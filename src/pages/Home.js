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
      </div>
    </div>
  )
}

export default Home
