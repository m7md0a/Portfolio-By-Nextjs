import Image from 'next/image'
import Loading from './Loading'
function SidebarMenu(props) {
  const {isMobile} = props
  const {data} = props
  const {filterData} = props
  const {activeLink} = props

  return (
        <aside className={'sidebarSkill ' + (isMobile ? 'active' : null)}>
              <div className="overflow-y-auto h-[calc(100vh-5rem)] py-4 px-0 md:px-3 bg-base-100 rounded">
                  <ul className="space-y-2">
                      <li onClick={() => filterData('All')}>
                          <a className={activeLink !== "All" ? null : 'active'}>
                            <Image width={200} height={200} className='min-w-6 min-h-6' src={'/img/icon-all.png'} alt={"All"} />
                            <span className="flex-1 ml-3 whitespace-nowrap">All</span>
                          </a>
                      </li>
                      {data ? data.map((skill, i) => {
                        return <li key={i} onClick={() => filterData(skill.title)}>
                                <a className={activeLink !== skill.title ?  null : 'active'} >
                                  <Image width={200} height={200} src={skill.icon ? `https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_${skill.icon}.svg` : skill.link} alt={skill.title} />
                                  <span>{skill.title}</span>
                                </a>
                            </li>
                      }) : <Loading />}
              </ul>
          </div>
        </aside>
  )
}

export default SidebarMenu;