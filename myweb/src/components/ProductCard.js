import React from "react";

const ProductCard = () => {
    return (
        <div className="col-3">
            <div className="product-card">
                <div className="product-image">
                    <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title"> Kids headphone bilk 10 pack multi colored for students</h5>
                    <p className="price">$100</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;