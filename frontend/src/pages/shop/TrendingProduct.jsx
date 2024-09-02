import React, { useState } from 'react';
import ProductCards from "./ProductCards.jsx";

import products from "../../data/products.json"

const TrendingProduct = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4);
    }
    return(
        <section className="section__container product__container">
            <h2 className="section__header">Trending Products</h2>
            <p className="section__subheader mb-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium ad animi, aperiam assumenda</p>

            {/* products card */}
            <div className="mt-12">
                <ProductCards products={products.slice(0, visibleProducts)} />
            </div>

            {/* load more products btn */}
            <div className="product__btn">
                {
                    visibleProducts < products.length && (
                        <button className="btn" onClick={loadMoreProducts}>Load More</button>
                    )
                }
            </div>
        </section>
    )
}

export default TrendingProduct;