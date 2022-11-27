import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";

export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((e) => console.log(e));
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products, "l");
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}
