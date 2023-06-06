import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetproductsByIdQuery } from '../features/productApi';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setQuantity } from '../features/userSlice';
import Review from '../components/Review';

const ProductDetails = () => {
    const { id } = useParams();
    const quantity = useSelector((state) => state.userInfo.quantity);
    const dispatch = useDispatch()
    const nav = useNavigate()
    const { data, isLoading } = useGetproductsByIdQuery(id)
    const { carts } = useSelector((store) => store.userInfo);


    console.log(carts)
    const handleQuantityChange = (newQuantity) => {
        dispatch(setQuantity(newQuantity));
    };

    const increment = () => {
        handleQuantityChange(quantity + 1)
    }

    const decrement = () => {
        handleQuantityChange(quantity - 1);
    }



    const formik = useFormik({
        initialValues: {
            select: 1
        },
    });

    const addToCarts = (cart) => {
        dispatch(setCart(cart));
        formik.resetForm();
    }


    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    }


    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container mt-[3rem] mx-auto">
                    <div className="grid grid-cols-2 py-4 md:grid-cols-1">
                        <img alt="ecommerce" className="w-full h-[500px] object-cover object-center rounded border border-gray-200" src={data.thumbnail} />
                        <div className="w-full mt-7 grid ml-6">
                            <h2 className="text-sm font-bold uppercase text-gray-500 tracking-widest">{data.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.title}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <span className="text-gray-600 ml-3">Rating:<b className='font-bold  mx-2'>{data.rating}/5</b></span>
                                </span>
                            </div>
                            <p className="leading-relaxed">{data.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div className="grid ml-6 ">
                                    <span className="mr-3 font-bold">Quantity</span>
                                    <div className="flex gap-3 mt-2">
                                        <button onClick={increment}>
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                        <input className="rounded border border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-2 pr-2 w-[50px]" type="text" value={quantity} />
                                        <button onClick={decrement}>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        {/* <p>Quantity: {quantity}</p>
                                        <button onClick={() => handleQuantityChange(quantity + 1)}>
                                            Increase Quantity
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="title-font font-medium text-2xl text-gray-900">${data.price}</span>

                                {
                                    quantity < 1 ? <button disabled className='flex ml-auto bg-gray-600  text-white border-0 py-2 px-6 rounded text-center cursor-no-drop'>Add To Cart</button>

                                        : <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                            onClick={() => {
                                                addToCarts({
                                                    id: data.id,
                                                    title: data.title,
                                                    totalPrice: data.price * quantity,
                                                    price: data.price,
                                                    description: data.description,
                                                    category: data.category,
                                                    qty: quantity,
                                                    image: data.thumbnail,
                                                    rating: data.rating
                                                });
                                                nav('/cart');
                                            }
                                            }
                                        >Add To Cart</button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='container mt-9'>
                        <h3>Product Reviews</h3>

                    </div>
                    <Review />
                </div>
            </section >
        </div >
    )
}

export default ProductDetails