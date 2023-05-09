import React from 'react'
import { DataTable, NavBar, CurrentData, ManualButton } from '../components'

const Watering = () => {
  return (
    <div>
      <NavBar/>
      <CurrentData isCalling = {"watering"}/>
      <DataTable isCalling = {"watering"}/>
    </div>
  )
}

export default Watering
