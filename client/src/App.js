import React, { useEffect } from 'react'
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
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/userAction';
import { ProtectedRoute } from 'protected-route-react';

const App = () => {

  const { isAuthenticated, user, error, message } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" })
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);


  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/me' element={<ProtectedRoute isAuthenticated={isAuthenticated}>
          <Profile user={user}/>
        </ProtectedRoute>} />
        <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/me'>
          <Login />
        </ProtectedRoute>} />
        <Route path='/register' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/me'>
          <Register />
        </ProtectedRoute>} />
        <Route path='/check-weather' element={<Weather />} />
        <Route path='/greenblogs' element={<Blogs />} />
        <Route path='/create-an-article' element={<CreateBlog />} />
        <Route path='/greenblogs/blog/:id' element={<Blog />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App