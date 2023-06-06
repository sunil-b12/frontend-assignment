import React, { useState } from 'react'
import { useGetproductsQuery } from '../features/productApi'
import ProductCard from './ProductCard';

const Products = () => {

    const { data, isLoading } = useGetproductsQuery();
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');


    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    }
    const products = data.products;

    const filteredData = products.filter((product) => {
        if (category !== '' && product.category !== category) {
            return false; // Filter by category
        }

        if (price !== '') {
            const [minPrice, maxPrice] = price.split('-');
            if (minPrice && Number(product.price) < Number(minPrice)) {
                return <h2>No Data Found</h2>// Filter by minimum price
            }
            if (maxPrice && Number(product.price) > Number(maxPrice)) {
                return false; // Filter by maximum price
            }
        }

        if (rating !== '') {
            const minRating = Number(rating.split('-')[0]);
            if (product.rating.rate < minRating) {
                return false; // Filter by minimum rating
            }
        }

        return true;
    });

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };


    return (
        <div className='bg-white'>
            <div className='container pt-9'>
                <h3 className='text-5xl text-black font-bold text-center'>Our Products</h3>
            </div>

            <div>
                <form className='container grid-card my-6 items-center justify-items-center'>
                    <div className="flex items-center space-x-4">
                        <label id="category" className="text-sm font-bold text-gray-700">Category:</label>
                        <select className="p-2 border border-gray-300 rounded"
                            name='category'
                            id='category'
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <option value="">Catagory</option>
                            <option value="smartphones">Smartphones</option>
                            <option value="laptops">Laptops</option>
                            <option value="furniture">Furniture</option>
                            <option value="groceries">Groceries</option>
                            <option value="automotive">Automotive</option>
                            <option value="skincare">Skincare</option>
                            <option value="home-decoration">Home decoration</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-4 mt-4">
                        <label id="price" className="text-sm font-bold text-gray-700">Price:</label>
                        <select className="p-2 border border-gray-300 rounded"
                            id="price"
                            value={price}
                            onChange={handlePriceChange}
                        >
                            <option value="">All</option>
                            <option value="1-25">Under $25</option>
                            <option value="25-50">$25 - $50</option>
                            <option value="50-1000">$50 - $1000</option>
                            <option value="10000-100000">Over $1000</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-4 mt-4">
                        <label id="rating" className="text-sm font-bold text-gray-700">Rating:</label>
                        <select id="rating" className="p-2 border border-gray-300 rounded"
                            value={rating}
                            onChange={handleRatingChange}
                        >
                            <option value="">All</option>
                            <option value="4">4 Stars & Up</option>
                            <option value="3">3 Stars & Up</option>
                            <option value="2">2 Stars & Up</option>
                            <option value="1">1 Star & Up</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-4 mt-4">
                        <button className="px-4 py-2 text-white bg-blue-500 rounded" type='submit'>Clear Filters</button>
                    </div>
                </form>
            </div>
            <ProductCard data={filteredData} isLoading={isLoading}/>
        </div>
    )
}

export default Products