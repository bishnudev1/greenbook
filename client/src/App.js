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
import UpdateProfile from './screens/me/UpdateProfile';
import UpdateProfilePicture from './screens/me/UpdateProfilePicture';
import { loadBlogs } from './redux/actions/blogAction';
import ChangePassword from './screens/me/ChangePassword';
import ForgetPassword from './screens/auth/forgetpassword/ForgetPassword';
import ResetPassword from './screens/auth/resetpassword/ResetPassword';
import OrderPlant from './screens/plant/OrderPlant';
import OrderSuccessful from './screens/plant/OrderSuccessful';

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
    dispatch(loadBlogs());
  }, [dispatch]);
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/me' element={<ProtectedRoute isAuthenticated={isAuthenticated}>
          <Profile user={user} />
        </ProtectedRoute>} />
        <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/me'>
          <Login />
        </ProtectedRoute>} />
        <Route path='/forget-password' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/me'>
          <ForgetPassword />
        </ProtectedRoute>} />
        <Route path='/reset-password/:token' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/me'>
          <ResetPassword />
        </ProtectedRoute>} />
        <Route path='/register' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/me'>
          <Register />
        </ProtectedRoute>} />
        <Route path='/check-weather' element={<Weather />} />
        <Route path='/greenblogs' element={<Blogs />} />
        <Route path='/create-an-article' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login'><CreateBlog /></ProtectedRoute>} />
        <Route path='/update-profile' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login'><UpdateProfile /></ProtectedRoute>} />
        <Route path='/update-dp' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login'><UpdateProfilePicture /></ProtectedRoute>} />
        <Route path='/change-password' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login'><ChangePassword /></ProtectedRoute>} />
        <Route path='/greenblogs/blog/:id' element={<Blog />} />
        <Route path='/order-plant' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login'><OrderPlant /></ProtectedRoute>} />
        <Route path='/order-successful' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login'><OrderSuccessful /></ProtectedRoute>} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App