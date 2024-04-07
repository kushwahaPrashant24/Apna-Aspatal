
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Home from './component/home/Home';
import Doctor from './component/Doctor/Doctor';
import Appointment from "./component/Appointment/Appointment";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element:  <><Navbar /><Home /></>,
  },

  {
    path: "/doctor",
    element: <><Navbar/><Doctor /></>
  },

  {
    path: "/Appointment",
    element: <><Appointment /></>
  },

  {
    path: "/Contact",
    element: <><Contact /></>
  },

  {
    path: "/About",
    element: <><About /></>
  },

  


 
 
  
]);


function App() {
  

  return (
    <>
    
     <RouterProvider router={router} />
    </>
  )
}

export default App
