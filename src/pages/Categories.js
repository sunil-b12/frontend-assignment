
import React from 'react'
import { useGetproductsByCatagoryQuery } from '../features/productApi'
import { useParams } from 'react-router';
import ProductCard from '../components/ProductCard';

const Categories = () => {
    const { catagories } = useParams()
    const { data, isLoading } = useGetproductsByCatagoryQuery(catagories);

    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    }

    const products = data.products;

    return (
        <div>
            <div className='container pt-9'>
                <h3 className='text-5xl text-black font-bold text-center'>Our {catagories}</h3>
            </div>
            <ProductCard  data={products}/>
        </div>
    )
}

export default Categories