import { Button, Card } from 'react-daisyui'
import React from 'react'
import Link from 'next/link';

function About(props) {
    const {data} = props;
    const {about} = props;
  return (
    <div>
        <h2 className='section-title' data-text="about">About</h2>
        <div className='grid grid-cols-1 md:grid-cols-6'>
            <div className='col-span-2'>
                <Card className='shadow p-3 bg-primary text-white'>
                    <div className='flex flex-col items-center space-y-3'>
                        <img className='w-16 h-16 rounded-full shadow-md' src={data.avatar_url} alt={"Myimage"} />
                        <h3 className='text-xl font-medium'>Mohamed</h3>
                        <div className='w-3/6 flex justify-between items-center'>
                            <div className='flex flex-col items-center'>
                                <span className='text-base-300 text-opacity-70'>Repos</span>
                                <span className='font-bold'>{data.public_repos}</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-base-300 text-opacity-70'>Followers</span>
                                <span className='font-bold'>{data.followers}</span>
                            </div>
                        </div>
                        <p className='text-center text-lg'>
                            {data.bio}
                        </p>
                        <p className='flex items-center space-x-1'>
                            <svg className="w-5 h-5 opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg>
                            <span>Freelance Web Designer</span>
                        </p>
                        <p className='flex items-center space-x-1'>
                            <svg className="w-5 h-5 opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                            <span>{data.location}</span>
                        </p>
                    </div>
                </Card>    
            </div>
            <div className='col-span-4 py-5'>
                <div className='flex flex-col space-y-2 py-2 px-4'>
                    <code className='font-medium dark:text-white'>Hi, This is Mohamed</code>
                    <h1 className='text-2xl md:text-3xl text-primary text-opacity-80 font-bold'>Freelance Web Designer</h1>
                    <p className='text-lg'>{about.bio}</p>
                    <p className='text-lg'>{about.bioTwo}</p>
                    <div className="flex space-x-3">
                        {/* <a href={about.downloadPDF} download="Mohamed-Abdelrahman.pdf" target="_blank" rel="noreferrer">
                            <Button color='primary' variant='outline'>
                                Download PDF
                            </Button>
                        </a> */}
                        
                        <Link target="_blank" href={about.downloadPDF}>
                            <Button color='primary' variant='outline'>My resume!</Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About