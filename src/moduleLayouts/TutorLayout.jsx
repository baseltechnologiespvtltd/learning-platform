import React from 'react'
import TutorSidebar from '../Components/TutorComponents/TutorSidebar'
import { Outlet } from 'react-router-dom'

const TutorLayout = () => {
  return (
    <div className="d-flex">
    <TutorSidebar />
    <main style={{ flexGrow: 1 }}>
      <Outlet />
    </main>
  </div>
  )
}

export default TutorLayout