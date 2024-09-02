import React from 'react';
import Banner from "./Banner.jsx";
import Categories from "./Categories.jsx";
import HeroSection from "./HeroSection.jsx";
import TrendingProduct from "../shop/TrendingProduct.jsx";

const Home = () => {
    return (
        <>
            <Banner/>
            <Categories/>
            <HeroSection/>
            <TrendingProduct/>
        </>
    )
}

export default Home;