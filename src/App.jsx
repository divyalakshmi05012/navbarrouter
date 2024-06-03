import React from 'react'
import NavBar from './components/NavBar'
import FullStack from './components/FullStack'
import DataScience from './components/DataScience'
import CyberCrime from './components/CyberCrime'
import Career from './components/Career'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'



function App() {
  return (
    <div id="wrapper">
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/full-stack' element={<FullStack/>}/>
        <Route path='/data-science' element={<DataScience/>}/>
        <Route path='/cyber-crime' element={<CyberCrime/>}/>
        <Route path='/cyber-crime' element={<CyberCrime/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path="*" element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App