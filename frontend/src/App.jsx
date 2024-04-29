// App.jsx

import React from 'react';
import './App.css';
import Welcome from './components/welcome'; 
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/about';
// import ContactUs from './components/ContactUs';




function App() {
    
    return (
        <>
       
<BrowserRouter>
{/* <Navbar /> */}
<Routes>
    <Route path='/' element={<Welcome />}></Route>
    <Route path='/home' element={<Home />}></Route>
    {/* <Route path='/about' element={<About />}></Route> */}

</Routes>
<Navbar />
<Routes>
<Route path='/about' element={<About />}></Route>
{/* <Route path='/contact' element={<ContactUs />}></Route> */}

</Routes>
{/* <Routes>
<Route path='/ContactUs' element={<ContactUs />}></Route>

</Routes> */}
</BrowserRouter>

        </>
    );
}

export default App;
