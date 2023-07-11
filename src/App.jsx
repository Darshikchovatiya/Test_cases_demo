import React from 'react'
import Add_stu from './component/Add_stu/Add_stu'
import View_stu from './component/View_stu/View_stu'
import Header from './component/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './component/Home/Home'
import Edit_stu from './component/Edit_stu/Edit_stu'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add_student' element={<Add_stu />} />
                <Route path='/view_student' element={<View_stu />} />
                <Route path='/edit_student' element={<Edit_stu />} />
            </Routes>
        </>
    )
}

export default App