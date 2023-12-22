import { BrowserRouter , Routes , Route, Router} from 'react-router-dom';
import Header from "./Pages/Header"
import Body from "./Pages/Body"
import RestaurantMenu from './Pages/RestaurantMenu';
import Cart from "./Pages/Cart";
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Body/>}></Route>
        <Route path="/restaurant/:resId" element={<RestaurantMenu/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
