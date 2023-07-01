import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart,checkout } from "../redux/actions/cartAction";


const Cart = () => {
  const CartProducts = useSelector(state => state.addtocart);

  const dispatch = useDispatch()
 
  const unique = [...new Set(CartProducts.map(item => {
    if(item.id){
      return item;
    }
  }))];
   
  var totalPrice = 0;

  for (let i = 0; i < unique.length; i++) {
    totalPrice = totalPrice + unique[i].price;
  }

  console.log('total', totalPrice)
  return (
    <div className='cart-container'>
      <h2>My Cart</h2>
      <div className='grid-box2'>

        <div className='left grid-box3'>
         
          {
            unique.length > 0 ? (
            unique.map(product => (
              <div key={product.id} className="single-product">
                <img
                  src={product.thumbnail} alt={product.title} />
                <h4>Title : {product.title}</h4>
                <h4>Price :${product.price}</h4>
                <button className='removeBtn' onClick={() => dispatch(removeFromCart(product.id))}>Remove From Cart</button>
              </div>
            ))
             ) : <p>Empty Items</p>
          }
        </div>
        <div className='right'>
          <h4>Chechout</h4>
          <ul>
            {
              unique.map((product, index) => {
                return <li key={++index}><span>{++index}. {product.title}</span><span>Rs.{product.price}</span></li>
              })
            }
            <div className='total-price'>
              <li><span>Total</span><span>Rs. {totalPrice}</span></li>
            </div>
            <button onClick={() => {
              dispatch(checkout())
              setTimeout(() => {alert('items have been checkout out.')},100)
            }}>Click To Checkout</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cart