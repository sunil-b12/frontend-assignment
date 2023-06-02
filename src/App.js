import './App.css';
import { Route, Routes } from 'react-router'
import Home from './pages/Home';
import Login from './pages/auth_page/Login';
import RootLayOut from './pages/RootLayOut ';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/User/Cart';
import AuthRoutes from './components/AuthRoutes';
import UserRoutes from './components/UserRoutes';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RootLayOut />} >
          <Route path='/' element={<Home />} />


          <Route element={<AuthRoutes />}>
            <Route path='cart' element={<Cart />} />
          </Route>


          <Route element={<UserRoutes />}>
            <Route path='user_login' element={<Login />} />
          </Route>
          
        </Route>
      </Routes>
      <ToastContainer autoClose={500} position='top-right' />
    </div>
  );
}

export default App;
