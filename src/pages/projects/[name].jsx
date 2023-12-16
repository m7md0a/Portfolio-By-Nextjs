import React from 'react'
import { useRouter } from 'next/router'
import { Badge } from 'react-daisyui'
import { getOneProject, getProjects, getReadme } from '@/axios'
import ContainerApp from '@/components/ContainerApp'
import { marked } from 'marked';
import CustomImage from '@/components/CustomImage'

function Project({project,readMe}) {
  const isNewProject = (e) => {
    let a = new Date().toISOString().split('T')[0].replace(/-/g,'');
    let b = new Date(e).toISOString().split('T')[0].replace(/-/g,'');
    return (a - b)
  }
  const clearSpace = (e) => {
    return e.split('-').join(' ');
  }


  return /* !project.name ? handleClick() : */ (
    <ContainerApp>
      <div className='rounded pb-5 w-full space-y-5 relative'>
          <div className='flex flex-col items-center md:-ml-10 md:space-x-10 space-y-10 lg:flex-row relative'>
            <div className={(isNewProject(project.updated_at) > 15 && 'p-2 ') + ' absolute top-0 right-0 z-10 flex items-center space-x-2'} >
                {isNewProject(project.updated_at) < 15 && <span className='rounded-tr rounded-bl p-1 bg-green-500 text-white text-sm font-medium'>New</span>}
            </div>
            <CustomImage className='w-32 h-32 rounded-xl' src={`https://raw.githubusercontent.com/m7md0a/${project.name}/main/screenshot.webp`} width={128} height={540} alt={"project image"} />
            <div className='flex flex-col items-center md:items-start space-y-4'>
              <h3 className='text-3xl md:text-6xl font-playFair'>{clearSpace(project.name)}</h3>
              <p className='flex flex-col md:flex-row space-y-4 md:space-x-3 items-center md:divide-x text-lg'>
                <a target={'_blank'} rel="noreferrer" href={project.homepage} className='link link-primary text-sm -mb-3'>{project.homepage}</a>
                <span className='text-sm text-base-content/50 px-2'>{project.updated_at.replace(/T|Z/gi, ' ')}</span>
              </p>
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-xl md:w-3/4'>{project.description}</p>
            <div className='flex items-center flex-wrap space-y-2 space-x-2 [&>div:first-child]:ml-2 [&>div:first-child]:-mb-2'>
                {project.topics.map((e) => <Badge variant='outline' size='lg' className='border-base-content/50 text-base-content/50' key={e}>{e}</Badge>)}
            </div>
          </div>
          <CustomImage className='rounded-xl w-auto' src={`https://raw.githubusercontent.com/m7md0a/${project.name}/main/screenshot.webp`} objectFit='cover' width={900} height={254} alt={"project image"} />
          <div className='details-project prose max-w-full'>
            {readMe && (<div dangerouslySetInnerHTML={{ __html: marked.parse(readMe)}} ></div>)}
          </div>
      </div>
    </ContainerApp>
  )
}

export default Project


// export async function getStaticPaths() {

//   try {
//     let projects = await getProjects();

//     let paths = projects.map(e=> {
//       return {
//         params : {name : `${e.name}`}
//       }
//     })
//     return {
//       paths,
//       fallback:false
//     }
    
//   } catch (error) {
//     // console.log(error);
//     return {
//       paths:[],
//       fallback:false
//     }
    
//   }
// }

export async function getServerSideProps(ctx){
  
    try {
        let name = ctx.params.name,
          project = await getOneProject(name),
          readme = await getReadme(name);
        return {
            props:{
              project,
              readMe : readme
            }
        }
    }
    catch(error) {
        // console.log(error);
        return {props : {
            project : {},
            readMe: {}
        }}
    }
}