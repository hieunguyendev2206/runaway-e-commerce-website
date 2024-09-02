import React from 'react';

import categoryOne from "../../assets/category-1.jpg"
import categoryTwo from "../../assets/category-2.jpg"
import categoryThree from "../../assets/category-3.jpg"
import categoryFour from "../../assets/category-4.jpg"
import {Link} from "react-router-dom";

const Categories = () => {
    const categories = [
        {
            name : "Accessories",
            path : "accessories",
            image: categoryOne
        },
        {
            name : "Dress Collection",
            path : "dress",
            image: categoryTwo
        },
        {
            name : "Jewellery",
            path : "jewellery",
            image: categoryThree
        },
        {
            name : "Cosmetics",
            path : "cosmetics",
            image: categoryFour
        }
    ]
    return (
        <>
            <div className="product__grid">
                {
                    categories.map((category) => (
                        <Link key={category.name} to={`/categories/${category.path}`} className="categories__card">
                            <img src={category.image} alt={category.name}/>
                            <h4>{category.name}</h4>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Categories;