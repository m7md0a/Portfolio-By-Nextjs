
import React from 'react'
import { Button } from 'react-daisyui'

const Left = (props) => {
    return (
        <div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-start w-full mx-auto">
              <div className="w-full lg:w-1/2 lg:pr-8">
                    <div className='ml-4 lg:ml-0'>
                        <time className="mb-1 text-sm font-normal leading-none text-base-content text-opacity-60">{props.time}</time>
                        <h3 className="text-lg font-semibold">{props.title}</h3>
                        <p className="mb-4 text-base font-normal text-base-content text-opacity-75">{props.description}</p>
                        <div className='space-x-1'>
                          {props.links.map((e,i) => {
                            return <a key={i} target="_blank" href={e.link}><Button size='sm' color="primary" variant='outline'>{e.text}</Button></a>
                          })}
                        </div>
                    </div>
              </div>
            </div>
            <div
              className="absolute flex items-center justify-center w-6 h-6 text-sm transform -translate-x-1/2 -translate-y-4 bg-primary rounded-full left-0 lg:left-1/2 sm:translate-y-0">
              <span className="text-base-100">{props.num}</span>
            </div>
          </div>
        </div> 
    )
}

const Right = (props) => {
    return (
        <div>
            <div className="flex flex-col items-center">
            <div className="flex items-center justify-end w-full mx-auto">
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className='ml-4 lg:ml-0'>
                        <time className="mb-1 text-sm font-normal leading-none text-base-content text-opacity-60">{props.time}</time>
                        <h3 className="text-lg font-semibold">{props.title}</h3>
                        <p className="mb-4 text-base font-normal text-base-content text-opacity-75">{props.description}</p>
                        <div className='space-x-1'>
                          {props.links.map((e,i) => {
                            return <a key={i} target="_blank"n   href={e.link}><Button size='sm' color="primary" variant='outline'>{e.text}</Button></a>
                          })}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute flex items-center justify-center w-6 h-6 text-sm transform -translate-x-1/2 -translate-y-4 bg-primary rounded-full left-0 lg:left-1/2 sm:translate-y-0">
                <span className="text-base-100">{props.num}</span>
            </div>
            </div>
        </div>
    )
}
function TimelineWork(props) {
  const {data} = props;

  return (
    <div className="p-4 lg:p-12">
      <h1 className='section-title' data-text="Timeline">Timeline</h1>
      <div className="w-full mx-auto lg:max-w-4xl">
        <div className="relative">
          <div className="absolute  w-px h-full transform -translate-x-1/2 bg-primary left-0 lg:left-1/2"></div>
          <div className="space-y-12 lg:space-y-8">
            {data.map((me,index) => {
                let i = index + 1 
                if (i % 2 === 0) {
                    return <Left key={me.id} num={i} title={me.title} time={me.time} description={me.description} links={me.links}/>
                  } else {
                    return <Right key={me.id} num={i} title={me.title} time={me.time} description={me.description} links={me.links}/>
                  }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineWork