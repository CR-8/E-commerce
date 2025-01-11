import React from 'react'
import Homepage from './homepage'
import Cartpage from './cartpage'
import Signin from './signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/cart" element={<Cartpage />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

