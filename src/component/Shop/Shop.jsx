import "./Shop.css";
import { Link } from "react-router-dom";
import ban from "../asstes/banner-img.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/Slices/Products-slice";

import { addtocard } from "../../rtk/Slices/Card-slice";

const Shop = () => {
  const products = useSelector((state) => state.products);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="shop">
      <h1>Shoping</h1>
      <div className="content-shop container">
        {products.map((product) => {
          return (
            <div className="cards" key={product.id}>
              <div className="card">
                <img src={product.image} alt="err" />
              </div>
              <div className="info-card">
                <h5>{product.title}</h5>
                <h4>{product.price}$</h4>
                <div className="two-btn">

                  <Link to={`/${product.id}`} className="btn-shop">
                    detalis
                  </Link>
                  <button
                    className="btn-add-shop"
                    onClick={() => dispatch(addtocard(product))}
                  >
                    Add To Card
                  </button>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;

{
  /* <div className="cards">
   <div className="card">
   <img src={ban} alt="" />
 </div>
 <div className="info-card">
   <h5>Title</h5>
   <h4>price</h4>
   <button className="btn-shop">detalis</button>
 </div>
</div> */
}
