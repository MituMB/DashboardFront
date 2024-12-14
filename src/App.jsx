import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
// import ChartList from './Components/ChartList/ChartList'
import ChartList from './Pages/ChartList/ChartList'
import MainLayout from './Pages/MainLayout/MainLayout'
import { FloorWisePerformance } from './Pages/Dashboard'
// import '@progress/kendo-theme-default/dist/all.css';

// import Demo from './Components/Demo/Demo'

const App = () => {

  
  return (
    <div className='App'>
{/* testinf
       */}
      <Routes>
        <Route path = '/' element = {<Navigate to = '/login' />} />
        <Route exact path="/home" element={<MainLayout><Home /></MainLayout>} />
        {/* <Route path ='/charts/chartist' element = {<MainLayout><ChartList /></MainLayout>} /> */}
        <Route path ='/chartlist' element = {<MainLayout><ChartList /></MainLayout>} />
        <Route path ='/dashboard/floor' element = {<MainLayout><FloorWisePerformance /></MainLayout>} />
        {/* <Route path ='/demo' element = {<MainLayout><Demo /></MainLayout>} /> */}
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