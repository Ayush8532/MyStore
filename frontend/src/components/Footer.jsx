import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src="" alt="assest logo" className='mb-5 w-32 ' />
                <p className='w-full md:w2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil veritatis quos, autem labore, dolorem pariatur blanditiis quo eum unde magnam sit quidem ad aliquam temporibus delectus molestias sapiente vitae recusandae!</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col text-gray-600 gap-1'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col text-gray-600 gap-1'>
                    <li>+1-212-456-7890</li>
                    <li>contact@mystore.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-center text-sm'>Copyright 2025@ mystore.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer