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
import Categories from './pages/Categories';
import UserProfile from './pages/User/UserProfile';
import SignUp from './pages/auth_page/Signup';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import DataVisualization from './pages/DataVisualization';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RootLayOut />} >
          <Route path='/' element={<Home />} />
          <Route path='/category/:catagories' element={<Categories />} />
          <Route path='products/search/:search' element={<Search />} />
          <Route path='/data' element={<DataVisualization />} />


          <Route element={<AuthRoutes />}>
            <Route path='cart' element={<Cart />} />
            <Route path='userprofile' element={<UserProfile />} />
          </Route>


          <Route element={<UserRoutes />}>
            <Route path='user_login' element={<Login />} />
            <Route path='user_signup' element={<SignUp />} />
          </Route>
          <Route path='/product_details/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={500} position='top-right' />
    </div>
  );
}

export default App;
