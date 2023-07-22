import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data, isLoading }) => {
    const nav = useNavigate();

    if (isLoading) {
        return (
            <div className='w-[32%] mx-auto mt-14'>
                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
        );
    }

    // Ensure data is valid and is an array
    if (!data || !Array.isArray(data)) {
        return <div>No products available.</div>;
    }

    console.log(data)

    return (
        <div className='bg-white'>
            <div className='container mt-[2rem] grid-card-06 xl:justify-items-center'>
                {data.map((item) => (
                    <Card className="w-96 md:w-[80%] xs:w-full" key={item.id}>
                        <CardHeader shadow={false} floated={false} className="h-96 cursor-pointer" onClick={() => nav(`/product_details/${item.id}`)}>
                            <img
                                src={item.image}
                                className="w-full h-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="flex items-center justify-between mb-2">
                                <Typography color="blue-gray" className="font-medium">
                                    {item.title}
                                </Typography>
                            </div>
                            <Typography variant="small" color="gray" className="font-normal opacity-75">
                                {item.description.substring(0, 100) + '....'}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 flex justify-between items-center">
                            <Button
                                ripple={false}
                                fullWidth={true}
                                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100 w-[60%] xs:w-[70%] xs:gap-2"
                                onClick={() => nav(`/product_details/${item.id}`)}
                            >
                                View Details
                            </Button>
                            <Typography color="blue-gray" className="font-bold text-right text-xl">
                                $ {item.price}
                            </Typography>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProductCard;
