import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Header from "./Pages/Header"
import Body from "./Pages/Body"
import RestaurantMenu from './Pages/RestaurantMenu';
import Cart from "./Pages/Cart";
import About from './Pages/About';
import useOnline from './Utils/useOnline';
import InternetConnection from './Pages/InternetConnection';

function App() {

  const isOnline = useOnline();

  if(!isOnline){
    return <InternetConnection/>
  }

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
