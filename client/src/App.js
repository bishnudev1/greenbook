import React from 'react'
import Home from './screens/home/Home'
import Navbar from './screens/layout/Navbar'
import Footer from './screens/layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './screens/auth/register/Register';
import Login from './screens/auth/login/Login';
import Profile from './screens/me/Profile';
import Blogs from './screens/blogs/Blogs';
import Blog from './screens/blogs/Blog';
import CreateBlog from './screens/blogs/CreateBlog';
import Weather from './screens/weather/Weather';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/me' element={<Profile />} />
        <Route path='/check-weather' element={<Weather />} />
        <Route path='/greenblogs' element={<Blogs />} />
        <Route path='/create-an-article' element={<CreateBlog />} />
        <Route path='/greenblogs/blog/:id' element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App