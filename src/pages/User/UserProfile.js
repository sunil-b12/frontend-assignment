import React from 'react'
import { useSelector } from 'react-redux'
import { useGetUserByIdQuery } from '../../features/authApi'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const UserProfile = () => {
    const { user } = useSelector((store) => store.userInfo)

    const { data, isLoading } = useGetUserByIdQuery(user.access_token)
    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    }
  
    return (
        <div className='container'>
            <Card className="flex-row w-full max-w-[48rem] mt-[2rem] rounded-none xs:grid">

                <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-none xs:w-full">
                    <img
                        src={data.avatar}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="blue" className="uppercase mb-4"><b className='font-bold'>Name</b>: {data.name}</Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2 text-xl">
                        <b className='font-bold'>Email</b>: {data.email}
                    </Typography>
                    <Typography color="gray" className="font-normal mb-2">
                        <b className='font-bold'>Password</b>: {data.password}
                    </Typography>
                    <Typography color="gray" className="font-normal mb-8">
                        <b className='font-bold'>Role</b>: {data.role}
                    </Typography>
                    <a href="#" className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
                            Update
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </div>

    )
}

export default UserProfile