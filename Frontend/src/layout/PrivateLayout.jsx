import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"

function PrivateLayout() {
  return (
    <div>
        <Outlet/>
        <Toaster/>
    </div>
  )
}

export default PrivateLayout