import Button from "./components/Button/Button";
import HotItem from "./components/HotItem/HotItem";
import Product from "./components/Product";
import "./page.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home_image-section">
        <div className="home_image-text">
          <h2>
            find clothes <br /> that matches <br /> your style
          </h2>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed <br /> to bring out your individuality and cater to your
            sense of style
          </p>
          <div className="home_image-button">
            <Button text="Shop Now" />
          </div>
        </div>
      </div>
      <div className="home__new-arrivals">
        <h2 className="new-arrivals__title">new arrivals </h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Product
              name="Điện Thoại"
              starNumber={4.2}
              price={300000}
              oldPrice={40000000}
              imageSource="https://cdn.pnj.io/images/detailed/116/gl0000y001844-lac-tay-vang-18k-pnj-1.png"
            />
          </div>
          <div>
            <Product
              name="Dien thoai"
              starNumber={1.2}
              price={300000}
              oldPrice={40000000}
              imageSource="https://cdn.pnj.io/images/detailed/116/gl0000y001844-lac-tay-vang-18k-pnj-2.png"
            />
          </div>
          <div>
            <Product
              name="Dien thoai"
              starNumber={1.2}
              price={300000}
              oldPrice={40000000}
              imageSource="https://cdn.pnj.io/images/detailed/116/gl0000y001844-lac-tay-vang-18k-pnj-2.png"
            />
          </div>
          <div>
            <Product
              name="Dien thoai"
              starNumber={1.2}
              price={300000}
              oldPrice={40000000}
              imageSource="https://cdn.pnj.io/images/detailed/116/gl0000y001844-lac-tay-vang-18k-pnj-2.png"
            />
          </div>
        </div>
      </div>
      <div className="product__hot-product">
        <p className="hot-product__title"> hot products</p>
        <div className="hot-product__list">
        <HotItem title="Dây Chuyền Vàng" imageSource="https://cdn.pnj.io/images/detailed/116/gl0000y001844-lac-tay-vang-18k-pnj-1.png"/>
        <HotItem title="Dây Chuyền Vàng" imageSource="https://cdn.pnj.io/images/detailed/116/gl0000y001844-lac-tay-vang-18k-pnj-1.png"/>
        <HotItem title="Dây Chuyền Vàng" imageSource="https://cdn.pnj.io/images/detailed/116/gl0000y001844-lac-tay-vang-18k-pnj-1.png"/>
        <HotItem title="Dây Chuyền Vàng" imageSource="https://cdn.pnj.io/images/detailed/116/gl0000y001844-lac-tay-vang-18k-pnj-1.png"/>
        </div>
      </div>
    </div>
  );
}
