import React from 'react'
import { useGetproductsQuery } from '../features/productApi'

import ProductCard from './ProductCard';

const Products = () => {

    const { data, isLoading } = useGetproductsQuery();

    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    }


    return (
        <div className='bg-white'>
            <div className='container pt-9'>
                <h3 className='text-5xl text-black font-bold text-center'>Our Products</h3>
            </div>
            <div className='container grid-card my-6 items-center justify-items-center'>
                <div className="flex items-center space-x-4">
                    <label for="category" className="text-sm font-bold text-gray-700">Category:</label>
                    <select id="category" className="p-2 border border-gray-300 rounded">
                        <option value="">Catagory</option>
                        <option value="clothing">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="home">Men clothing</option>
                        <option value="home">Women clothing</option>
                    </select>
                </div>

                <div className="flex items-center space-x-4 mt-4">
                    <label for="price" className="text-sm font-bold text-gray-700">Price:</label>
                    <select id="price" className="p-2 border border-gray-300 rounded">
                        <option value="">All</option>
                        <option value="under-25">Under $25</option>
                        <option value="25-50">$25 - $50</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="over-100">Over $100</option>
                    </select>
                </div>

                <div className="flex items-center space-x-4 mt-4">
                    <label for="rating" className="text-sm font-bold text-gray-700">Rating:</label>
                    <select id="rating" className="p-2 border border-gray-300 rounded">
                        <option value="">All</option>
                        <option value="4-and-up">4 Stars & Up</option>
                        <option value="3-and-up">3 Stars & Up</option>
                        <option value="2-and-up">2 Stars & Up</option>
                        <option value="1-and-up">1 Star & Up</option>
                    </select>
                </div>

                <div className="flex items-center space-x-4 mt-4">
                    <button className="px-4 py-2 text-white bg-blue-500 rounded">Apply Filters</button>
                    <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded">Clear Filters</button>
                </div>
            </div>

            <ProductCard data={data} />
        </div>
    )
}

export default Products