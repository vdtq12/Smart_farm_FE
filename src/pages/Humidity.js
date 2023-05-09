import React from 'react'
import { DataTable, NavBar, CurrentData, ManualButton } from '../components'

const Humidity = () => {
  return (
    <div>
      <NavBar/>
      <CurrentData isCalling = {"humidity"}/>
      <DataTable isCalling = {"humidity"}/>
    </div>
  )
}

export default Humidity
