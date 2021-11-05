import React from 'react'
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Product/Products';
import Announcement from './../components/Announcement';
import Slider from './../components/Slider';
import Footer from './../components/footer';

const Home = () => {
    return (
        <div>
             <Announcement />
             <Navbar/>
             <Slider/>
             <Categories/>
             <Products/>
             <Newsletter/>
             <Footer/>
        </div>
    )
}  

export default Home;
