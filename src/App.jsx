
import Home from "./components/Home"
import About from "./components/About"
import Resume from "./components/Resume";
// import Service from "./components/Service"
import Contact from "./components/Contact"
import Nav from "./components/Navbar"
import Footer  from "./components/Footer";

import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function App() {
  const router = createBrowserRouter(
    [{
       path:"/",
       element:
       <div>
        <Nav/>
        <Home/>
        <Footer/>
       </div>
     },{
       path:"/About",
       element:
       <div>
        <Nav/>
        <About/>
        <Footer/>
       </div>
     },{
       path:"/Resume",
       element:
       <div>
        <Nav/>
        <Resume/>
        <Footer/>

       </div>
     },
    //  {
    //    path:"/Service",
    //    element:
    //    <div>
    //     <Nav/>
    //     <Service/>
    //     <Footer/>
    //    </div>
    //  },
     {
       path:"/Contact",
       element:
       <div>
        <Nav/>
        <Contact/>
        <Footer/>
       </div>
     }
    ]
  )

  return (
    <div>
         <RouterProvider router={router}/>
    </div>
  )
}

export default App
