
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './componenets/Navbar/Navbar';
import Footer from './componenets/Footer/Footer';
import Cart from './componenets/cart/Cart';
import Blog from "./pages/Blog";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/SignIn';


const Layout = () => {
  return (
    <div >
      <Navbar />
      <Outlet/>

      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/signin",
        element:<SignIn/>
      }
    ]
  },
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
