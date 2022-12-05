import React from 'react'
import Headrs from '../../features/Header/Headrs'
import NavBar from '../../features/navbar/NaveBar'
import BarChart from '../lineChart/LineChart'
import TableAndCircles from '../tableAndCircles/TableAndCircles'

const Home = () => {
  return (

    <>
     <NavBar />
      <Headrs/>
      <BarChart/>
      <TableAndCircles/>
    
    </>
  )
}

export default Home