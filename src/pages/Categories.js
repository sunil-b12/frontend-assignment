
import React from 'react'
import { useGetproductsByCatagoryQuery } from '../features/productApi'
import { useParams } from 'react-router';
import ProductCard from '../components/ProductCard';

const Categories = () => {
    const { catagories } = useParams()
    const { data } = useGetproductsByCatagoryQuery(catagories);

    console.log(data)

    return (
        <div>
            <div className='container pt-9'>
                <h3 className='text-5xl text-black font-bold text-center'>Our {catagories}</h3>
            </div>
            <ProductCard  data={data}/>
        </div>
    )
}

export default Categories