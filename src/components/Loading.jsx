// import { Spinner } from 'react-daisyui'
import React from 'react'

export default function Loading() {
  return (
    <>
        <div className='absolute top-2/4 left-2/4 flex flex-col items-center space-y-3'>
            <h1>Loading...</h1> 
            {/* <Spinner size='lg' aria-label="Center-aligned spinner example" /> */}
        </div>
    </>
  )
}
