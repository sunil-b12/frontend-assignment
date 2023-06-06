import React from 'react';
import { useGetproductsQuery } from '../features/productApi';
import {  Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';



const DataVisualization = () => {
    const { data, isLoading } = useGetproductsQuery();
    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    }
    const products = data.products;

    const productNames = products?.map((product) => product.title) || [];
    const productStocks = products?.map((product) => product.stock) || [];
    const productRatings = products?.map((product) => product.rating) || [];

    const filteredProducts = products.filter((product) => product.rating >= 1 && product.rating <= 5);

    const filterProductNames = filteredProducts.map((product) => product.title);
    const filterProductRatings = filteredProducts.map((product) => product.rating);
    console.log(productNames)
    const barChartData = {
        labels: productNames,
        datasets: [
            {
                label: 'Product Stock',
                data: productStocks,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const pieChartData = {
        labels: filterProductNames,
        datasets: [
            {
                label: 'Product Rating',
                data: filterProductRatings,
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
            },
        ],
    };


  

    return (
        <div className='container mt-5'>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div>
                        <h2 className='text-xl font-bold'>Product Popularity Chart</h2>
                        <Bar data={barChartData}/>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Product Popularity Chart</h2>
                        <Pie data={pieChartData}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataVisualization;
