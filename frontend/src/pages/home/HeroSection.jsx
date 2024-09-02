import React from 'react';

import cardOne from "../../assets/card-1.png"
import cardTwo from "../../assets/card-2.png"
import cardThree from "../../assets/card-3.png"

const cards = [
    {
        id: 1,
        image: cardOne,
        trend: "2024 Trend",
        title: "Women Shirt "
    },
    {
        id: 2,
        image: cardTwo,
        trend: "2024 Trend",
        title: "Women Dresses"
    },
    {
        id: 3,
        image: cardThree,
        trend: "2024 Trend",
        title: "Women Casuals"
    }

]

const HeroSection = () => {
    return(
        <section className="section__container hero__container">
            {
                cards.map((card) => (
                    <div key={card.id} className="hero__card">
                        <img src={card.image} alt="" />
                        <div className="hero__content">
                            <p>{card.trend}</p>
                            <h4>{card.title}</h4>
                            <a href="">Discover More</a>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default HeroSection;