import React from "react";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <div className="home__new-products grid grid-cols-4 gap-4">
        <div>
          <Product name="Dien thoai" starNumber={1.2} price={300000} oldPrice={40000000} imageSource="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/309722/oppo-reno10-blue-thumbnew-600x600.jpg"/> </div>
        <div> </div>
        <div> </div>
        <div> </div>
      </div>
    </div>
  );
};

export default Home;
