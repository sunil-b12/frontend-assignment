import React from 'react'
import { useGetSearchProductsQuery, useGetproductsByCatagoryQuery } from '../features/productApi';
import { useParams } from 'react-router';
import ProductCard from '../components/ProductCard';

const Search = () => {
    const { search } = useParams()
    const { data, isLoading } = useGetSearchProductsQuery(search);

    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    }

    const products = data.products;
    
  console.log(data)

    return (
        <div className='container mt-9'>
            {products.length === 0 ? (
                <h2>No Search Result Found......</h2>
            ) : (
                <div>
                    <h2 className='font-bold text-xl'>{search}<b className='text-sm pl-2 lowercase'>Result Found</b></h2>
                    <ProductCard data={products} />
                </div>
            )}
        </div>
    )
}

export default Search