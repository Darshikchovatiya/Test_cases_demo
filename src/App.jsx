import React from 'react'
import Add_stu from './component/Add_stu/Add_stu'
import View_stu from './component/View_stu/View_stu'
import Header from './component/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './component/Home/Home'
import Edit_stu from './component/Edit_stu/Edit_stu'
import View from './component/View/View'

function App() {
    return (
        <>
        <h1>Vite React</h1>
        <p>Hello coder First React TEST Case xyz</p>
        <p>Freedom is not given, it is taken</p>
        <img src="https://images.pexels.com/photos/6296908/pexels-photo-6296908.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" title='sky and mountain' />

        <input type="text" placeholder='Enter name' />
            {/* <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add_student' element={<Add_stu />} />
                <Route path='/view_student' element={<View_stu />} />
                <Route path='/edit_student' element={<Edit_stu />} />
                <Route path='/view' element={<View />} />
            </Routes> */}
        </>
    )
}

export default App