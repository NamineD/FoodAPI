import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


//components
import Home from "../components/Home";
import AboutUs from "./AboutUs";
import Area from './Area';
import Category from './Category';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Detail from './Detail';
import CategoryList from '../components/CategoryList';


const Pages = () => {


  return (
    <>
        <Header />

        <Routes>
            <Route path='/' element={ <Home /> } /> 
            <Route path='/about-us' element={ <AboutUs /> } />
            <Route path='/categories' element={ <CategoryList /> } />
            <Route path='/categories/:categoryName' element={ <Category /> } />
            <Route path='/areas' element={ <Area /> } />
            <Route path='/detail/:id' element={ <Detail /> } />

            <Route path='*' element={ <Navigate to="/" replace /> } />
                
        </Routes>

        <Footer />

    </>
  )
}

export default Pages
