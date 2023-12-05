
import Link from 'next/link';
import { Card, Tooltip } from 'react-daisyui';
import CustomImage from '../CustomImage';


function ProjectCard(props) {
  const {data} = props

  const colorsRandom = () => {
    const colorArr = ['#ea5a92','#17c3a5','#5096f7','#fa8036','#e95890','#7ebce3','#d289e3','#fb8137'];
    return colorArr[Math.floor(Math.random() * colorArr.length)]
  }


  const isNewProject = (e) => {
    let a = new Date().toISOString().split('T')[0].replace(/-/g,'');
    let b = new Date(e).toISOString().split('T')[0].replace(/-/g,'');
    return (a - b)

  }

  const clearSpace = (e) => {
    return e.split('-').join(' ');
  }
  
  return (
    <>
        <Card className='bg-base-100 relative group' >
          <figure className='overflow-hidden'>
            <CustomImage key={data.name} alt={data.name} width={406} height={228} className='min-w-full min-h-full' src={`https://raw.githubusercontent.com/m7md0a/${data.name}/main/screenshot.webp`} />
          </figure>
          <Card.Body className='p-3 space-y-5'>
            <div className='space-y-1'>
              <Card.Title tag="h2">{clearSpace(data.name)}</Card.Title>
              <div className='flex items-center flex-wrap gap-1'>
                {data.topics.map((e,i) => <span style={{color: colorsRandom()}} key={e} className='px-1 text-sm rounded border-current font-bold'>{e}</span>)}
              </div>
              <p className='paragraph'>{data.description}</p>
            </div>
            <Card.Actions className='backdrop-blur-lg absolute -top-5 left-0 h-full w-full justify-center items-center hidden group-hover:flex'>
                <div className='px-4 py-2 rounded-full flex space-x-2 bg-base-100'>
                  <Tooltip message="Repo in GitHub">
                    <a href={data.html_url} rel="noreferrer" target='_blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>  
                    </a>
                  </Tooltip>
                  <Tooltip message="View">
                    <a href={data.homepage} rel="noreferrer" target='_blank'>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </a>
                  </Tooltip>
                  <Tooltip message="Details">
                    <Link href={`/projects/${data.name}`}>
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </Link>
                  </Tooltip>
                </div>
               {isNewProject(data.updated_at) < 5 && <div className='absolute top-3 right-3 badge badge-success text-base-300 font-bold'>New</div>}
            </Card.Actions>
          </Card.Body>
        </Card>
      </>
  )
}

export default ProjectCard