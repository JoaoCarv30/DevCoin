import React from 'react'

import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (

  <>
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/description">Description</a>
          </li>
        </ul>
      </nav>
    </header>
    
      <Outlet />
    
  </>
  )
}
