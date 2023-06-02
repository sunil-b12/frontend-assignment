import React from 'react'
import { useGetproductsQuery } from '../features/productApi'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter
  } from "@material-tailwind/react";

const Products = () => {

    const { data, isLoading, isError } = useGetproductsQuery();

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
            <div className='container mt-[2rem] grid-card-06 xl:justify-items-center'>
                {
                    data && data?.map((data) => {
                        return  <Card className="w-96 md:w-[80%] xs:w-full" key={data.id}>
                        <CardHeader shadow={false} floated={false} className="h-96 cursor-pointer">
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
                           {data.description.substring(0,150) + '........'}
                          </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 flex justify-between items-center">
                          <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100 w-[60%] xs:w-[70%] xs:gap-2"
                          >
                            Add to Cart
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

export default Products