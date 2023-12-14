import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Login from './component/login';
import Sign from './component/Sign';
import About from './component/About';
import MainHeader from './component/MainHeader';
import Contact from './component/Contact';
import Nav from './component/Nav';
import Dashboard from './component/Dashboard';
import { useState } from 'react';
import PrivateRoute from './component/PrivateRoute';


function App() {

  const [isLogin, setIsLogin] = useState(false);
  // console.log(isLogin);

  return (
    <div className='w-screen h-screen bg-black ' >

      <Nav isLogin={isLogin} setIsLogin={setIsLogin}></Nav>

      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
          <Route path='/sign-up' element={<Sign isLogin={isLogin} setIsLogin={setIsLogin} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={          
            <PrivateRoute isLogin={isLogin} >
              <Dashboard/>
            </PrivateRoute>

          } />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
