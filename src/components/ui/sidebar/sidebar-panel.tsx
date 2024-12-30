import React from 'react'
import SidebarMenu from './sidebar-menu'
import { sidebarCanvasOperations, sidebarNodes } from '../../../data'

const SidebarPanel = () => {
  return (
    <div className="relative left-0 flex gap-4 flex-col">
    <SidebarMenu elements={sidebarNodes} />
    <SidebarMenu elements={sidebarCanvasOperations}/>
  </div>
  )
}

export default SidebarPanel