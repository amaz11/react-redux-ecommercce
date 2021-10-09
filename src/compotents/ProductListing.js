import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProduts = async () => {
    const responce = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Error", err));
    dispatch(setProducts(responce.data));
    // console.log(responce.data)
  };

  useEffect(() => {
    fetchProduts();
  }, []);
  // console.log("Products:", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
