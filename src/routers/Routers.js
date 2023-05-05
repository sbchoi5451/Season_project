import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Season from '../season/Season'

function Routers() {
  return (
    <Routes>
        <Route path ="/" element={<Season />} />
        <Route path ="/main" />
        <Route path ="/board" />
        <Route path ="/login" />
        <Route path ="/signup" />
    </Routes>
  )
}

export default Routers