import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ChartList from './Components/ChartList/ChartList'
import MainLayout from './Pages/MainLayout/MainLayout'

const App = () => {
  return (
    <div className='App'>
{/* testinf
       */}
      <Routes>
        <Route path = '/' element = {<Navigate to = '/login' />} />
        <Route exact path="/home" element={<MainLayout><Home /></MainLayout>} />
        <Route path ='/charts/chartist' element = {<MainLayout><ChartList /></MainLayout>} />
        <Route path = '/login' element = {<Login />} />
        {/* <Route path = '/home' element = {<Home />}/>  */}
        {/* <Route path = '/home' element = {<Home />}> 
          <Route path ='/charts/chartist' element = {<ChartList />} />
        </Route> */}
      </Routes>

    </div>
  )
}

export default App