import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCart } from '../features/userSlice';

const ProductCard = (props) => {
    const { data } = props
    const nav = useNavigate();
    const dispatch = useDispatch()

    const addToCarts = (cart) => {
        dispatch(setCart(cart));
    }
    return (
        <div className='bg-white'>


            <div className='container mt-[2rem] grid-card-06 xl:justify-items-center'>
                {
                    data && data.map((data) => {
                        return <Card className="w-96 md:w-[80%] xs:w-full" key={data.id}>
                            <CardHeader shadow={false} floated={false} className="h-96 cursor-pointer"  >
                                    <img
                                        src={data.image}
                                        className="w-full h-full object-cover"
                                    />
                            </CardHeader>
                            <CardBody>
                                <div className="flex items-center justify-between mb-2">
                                    <Typography color="blue-gray" className="font-medium">
                                        {data.title}
                                    </Typography>

                                </div>
                                <Typography variant="small" color="gray" className="font-normal opacity-75">
                                    {data.description.substring(0, 100) + '....'}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0 flex justify-between items-center">
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100 w-[60%] xs:w-[70%] xs:gap-2"
                                    onClick={() => nav(`/product_details/${data.id}`)}>
                                    View Details
                                </Button>
                                <Typography color="blue-gray" className="font-bold text-right text-xl">
                                    $ {data.price}
                                </Typography>
                            </CardFooter>
                        </Card>
                    })
                }

            </div>
        </div>
    )
}

export default ProductCard