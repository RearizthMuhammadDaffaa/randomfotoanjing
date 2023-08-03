import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { BrowserRouter,Routes,Route,Router } from 'react-router-dom'
import Layout from './components/Layout'
import RandomImage from './pages/RandomImage'
import BreedList from './pages/BreedList'

// https://dog.ceo/dog-api/documentation/  untuk api


function App() {
  const [count, setCount] = useState(0)
 

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<RandomImage />} />
          <Route path='breeds-list' element={<BreedList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
