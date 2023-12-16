import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data.attributes?.[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">{data?.attributes?.price}DA</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              {/* <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button> */}
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              // onClick={() =>
              //   dispatch(
              //     addToCart({
              //       id: data.id,
              //       title: data.attributes.title,
              //       desc: data.attributes.desc,
              //       price: data.attributes.price,
              //       img: data.attributes.img.data.attributes.url,
              //       quantity,
              //     })
              //   )
              // }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links"></div>
            <div className="info"></div>
            <hr />
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
