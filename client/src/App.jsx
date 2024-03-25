import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/mainLayout'
import AboutPage from './Pages/About Page'
import BlogPage from './Pages/Blog Page'
import Home from './Pages/Home Page'
import Login from './Pages/Login Page'
import Register from './Pages/Register Page'
import ShopPage from './Pages/Shop Page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
