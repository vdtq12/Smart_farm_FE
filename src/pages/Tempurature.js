import React from 'react'
import { DataTable, NavBar, CurrentData, ManualButton } from '../components'

const Tempurature = () => {
  return (
    <div>
      <NavBar/>
      <CurrentData isCalling = {"temperature"}/>
      <DataTable isCalling = {"temperature"}/>
    </div>
  )
}

export default Tempurature
