import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Pics from './pages/Pics'
import CheckOut from './pages/CheckOut'


export default function App() {
    return (
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Pics />} />
                    <Route path='check-out' element={<CheckOut />} />
                </Route>
            </Routes>
    )
}