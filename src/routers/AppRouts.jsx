import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../containers/dashboards/Dashboard'
import Content from '../containers/contents/Content'
import Analytic from '../containers/analytics/Analytic'
import Customization from '../containers/customizations/Customization'

const AppRouts = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Content' element={<Content />} />
        <Route path='/Analytic' element={<Analytic />} />
        <Route path='/Customization' element={<Customization />} />
    </Routes>
  )
}

export default AppRouts