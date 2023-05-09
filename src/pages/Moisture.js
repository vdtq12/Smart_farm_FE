import React from 'react'
import { DataTable, NavBar, CurrentData, ManualButton } from '../components'

const Moisture = () => {
  return (
    <div>
      <NavBar/>
      <CurrentData isCalling = {"moisture"}/>
      <DataTable isCalling = {"moisture"}/>
    </div>
  )
}

export default Moisture
