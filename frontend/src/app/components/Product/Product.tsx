import React from "react";
import Star from "../Star";
import "./Product.scss"

interface ProductProps {
  imageSource: string;
  name: string;
  starNumber: number;
  price: number;
  oldPrice: number;
}

const Product: React.FC<ProductProps> = ({
  imageSource,
  name,
  starNumber,
  price,
  oldPrice,
}) => {
  const changePercentage = Math.round((price / oldPrice) * 100);
  return (
    <div className="product">
      <div className="product__image-container">
        <div className="product__image-box">
          <img className="product__image" src={imageSource} />
        </div>
      </div>
      <div className="product__info">
        <p className="product__name">{name}</p>
        <div className="product__star">
          <Star starNumber={starNumber} />
          <span>{starNumber}</span>
        </div>
        <div className="product__price">
          <div className="product__price">
            <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</span>
          </div>
          <div className="product__old-price">
            <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(oldPrice)}</span>
          </div>
          <div className="product__change-percentage">{changePercentage}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
