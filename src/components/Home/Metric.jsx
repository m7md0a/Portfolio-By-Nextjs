import React from 'react'
import { Card } from 'react-daisyui';

function Metric(props) {
    const {title} = props;
    const {count} = props;
  return (
    <>
       <Card className='bg-base-100 group relative overflow-visible text-center'>
            <div className='absolute -top-6 w-full h-12 z-10 flex justify-center items-center '>
                <h4 className='p-4 bg-primary text-white text-2xl rounded-xl group-hover:shadow'>{count}+</h4>
            </div>
            <Card.Body className='p-16 text-xl relative z-10 group-hover:text-white/90'>
                {title}
            </Card.Body>
            <div className='w-full h-full absolute overflow-hidden top-0 rounded-box'>
              <div className='w-20 h-20 bg-primary absolute -left-full -top-full rounded-full rounded-tl-none group-hover:inset-0 group-hover:scale-[6] md:group-hover:scale-[4] duration-300'></div>
            </div>
        </Card> 
    </>
  )
}

export default Metric