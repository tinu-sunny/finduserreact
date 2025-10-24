
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import User from './pages/User'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/user/:id' element={<User />} />
      </Routes>
    </>
  )
}

export default App
