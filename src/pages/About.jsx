import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About us image" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, similique consectetur. Officia, corrupti! Labore optio assumenda, quia, voluptatum quo odio ducimus nesciunt eaque doloribus autem exercitationem sint, illum id eum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore culpa, possimus consequatur ea, voluptas veniam id veritatis ex incidunt cumque accusantium aliquam fuga sed iste maxime molestiae unde tenetur magnam aperiam necessitatibus. Explicabo eligendi illum similique placeat, non in.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum quia accusantium ex quis, quaerat dolore ad corrupti doloribus temporibus. Quos dicta voluptas quibusdam est fuga nostrum ut vero! Praesentium!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero dolorem voluptates veritatis error. Aliquam?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero dolorem voluptates veritatis error. Aliquam?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero dolorem voluptates veritatis error. Aliquam?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About