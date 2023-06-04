import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../features/userSlice';
import { NavLink } from 'react-router-dom';
// cartpage

const Cart = () => {
  const { carts } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();



  const calculateTotalPrice = (id) => {
    const cartItem = carts.find((item) => item.id === id);
    if (cartItem) {
      const totalPrice = cartItem.price * cartItem.qty;
      return totalPrice.toFixed(2);
    }

  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    for (const cartItem of carts) {
      const totalPrice = calculateTotalPrice(cartItem.id);
      totalCost += parseFloat(totalPrice);
    }
    return totalCost.toFixed(2); // Round to two decimal places
  };

  return (
    <>
      {carts.length === 0 ? <h1 className=' container text-2xl font-semibold mt-[2rem]'>Add Some Products to cart</h1> :
        <div className="container mx-auto mt-10">
          <div className="w-[100%] flex shadow-md my-10 md:grid" >
            <div className="w-[80%] bg-white px-10 py-10 md:w-full">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
              </div>
              {
                carts.map((data, i) => {
                  return <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={data.id}>
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img className="h-24" src={data.image} alt="" />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{data.title}</span>
                        <span className="text-[#ebba52] text-xs font-bold uppercase">{data.category}</span>
                        <NavLink className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => dispatch(removeFromCart(i))}> Remove </NavLink>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <div className="flex gap-3 mt-2">
                        <button onClick={() => dispatch(incrementQuantity(data.id))}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        <input className="rounded border border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-2 pr-2 w-[50px]" type="text" value={data.qty} />
                        <button onClick={() => dispatch(decrementQuantity(data.id))}>
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      </div>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">${data.price}</span>
                    <span className="text-center w-1/5 font-semibold text-sm">${calculateTotalPrice(data.id)}</span>
                  </div>
                })
              }
              <button href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Continue Shopping
              </button>
            </div>

            <div id="summary" className="w-[20%] px-8 py-10 md:w-full bg-[#f26522] text-white">
              <h1 className="font-bold text-2xl border-b pb-8 text-white">Order Summary</h1>
              <div className="grid mt-10 mb-5 gap-5">
                {
                  carts.map((data, i) => {
                    return <div className='flex justify-between' key={i}>
                      <span className="font-semibold text-sm uppercase">Items {i + 1}</span>
                      <span className="font-semibold text-sm">${calculateTotalPrice(data.id)}</span>

                    </div>
                  })
                }
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${calculateTotalCost()}</span>
                </div>
                <button className="bg-[#30302e] font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Cart