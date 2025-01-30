import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Common from './Routes/Common'

import "@fontsource/inter";
import "@fontsource/roboto";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Common/>
      </BrowserRouter>
    </div>
  )
}

export default App