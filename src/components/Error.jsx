import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    let error = useRouteError();
  console.error(error.error.message);
  return (
    <div>
        <Header/>
        <div className='flex justify-center items-center h-[80vh] bg-gray-50 '>

        <div className='text-4xl'>{error.error.message}
            <h1 className='text-3xl'>Go to <Link to={"/"} className='text-red-500'>HomePage</Link></h1>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Error