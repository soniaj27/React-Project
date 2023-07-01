import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartAction";

const Home = () => {
   const { loading, products, error } = useSelector(state => state.product)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchProducts())
   }, [])

   return (
      <div className="home-container">
      <h2>All Items</h2>
         <div className="grid">
            {
               products.length > 0 && (

                  products.map(product => (
                     <div key={product.id} className="single-product">
                        <img
                           src={product.thumbnail} alt={product.title} />
                        <h4>Title : {product.title}</h4>
                        <h4>Price :${product.price}</h4>
                        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                     </div>

                  ))
               )
            }
         </div>
      </div>
   )
}
export default Home;