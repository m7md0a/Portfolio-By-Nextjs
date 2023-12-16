import { getProfileData, getAbout } from '@/axios'
import ContainerApp from '@/components/ContainerApp'
import About from '@/components/Home/About'
import HeroApp from '@/components/Home/HeroApp'
import React, { useState } from 'react'
import TimelineWork from '@/components/Home/TimelineWork'
import Metric from '@/components/Home/Metric'
import Contact from '@/components/Home/Contact'

export default function index({profileData, aboutData}) {
  const {about, timeLine, metrics, skills} = aboutData;

  return (
    <div className='-mt-20'>
      <HeroApp profileData={profileData} about={about} />
      <ContainerApp className='min-h-[65vh]'>
        {profileData && <About data={profileData} about={about} />}
      </ContainerApp>
      <ContainerApp className="min-h-[80vh]">
        {timeLine && <TimelineWork data={timeLine}/>}
      </ContainerApp>
      <ContainerApp className='min-h-[30vh] flex flex-col justify-center space-y-20 md:space-y-36 items-center'>
        <h2 className='section-title' data-text="Metrics">Metrics</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-3 w-full'>
          {metrics.map((e) => {
            if(e.title === 'Projects') {
              return <Metric key={e.title} title={e.title} count={profileData.public_repos} /> 
            } 
            else if(e.title === 'Skills') {
              return <Metric key={e.title} title={e.title} count={skills.length} /> 
            } 
            else {
              return <Metric key={e.title} title={e.title} count={e.count} />
            }
          })}
        </div>
      </ContainerApp>
      <ContainerApp className='min-h-screen flex items-center'>
        <Contact />
      </ContainerApp>
    </div>
  )
}

export async function getStaticProps() {
  try {
    let project =  await getProfileData();
    let aboutData = await getAbout();
    // console.log(aboutData);
    return {
      props:{
        profileData : project,
        aboutData
      }
    }
  } catch (error) {
    console.log(error);
    return {props : {
      profileData : {}
    }}
  }
}
