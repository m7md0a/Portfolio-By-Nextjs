
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect ,  useState } from "react";
import {Button, Navbar} from "react-daisyui";

function NavbarComponent() {
  const {asPath} = useRouter();

  const [theme, setTheme] = useState(true)
  const [isActiveNavbar, setActiveNavbar] = useState(false)
  const [scrollTopActive, setScrollTopActive] = useState(false)

  const handleScroll = event => {
    window.scrollY > 100 ? setScrollTopActive(true) : setScrollTopActive(false)
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      if(!localStorage.getItem('theme')){
        document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');
        setTheme(false)
      } else {
        document.getElementsByTagName('html')[0].setAttribute('data-theme', localStorage.getItem('theme'));
        setTheme(true)
      }
  },[])

  function SwitchTheme () {
    if (!theme) {
      document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', 'dark');
      setTheme(true)
      localStorage.setItem('theme', 'dark')
    }
    else {
      document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', 'light');
      setTheme(false)
      localStorage.removeItem('theme')
    }

  }


  return (
    <div className={(asPath === '/' &&  !scrollTopActive? 'home ' : '') + "relative flex w-full font-sans"}>
      <Navbar className={(scrollTopActive || asPath === '/projects' ? 'bg-base-100 shadow ' : '') + "fixed top-0 px-4 z-50 flex flex-wrap h-14 md:h-auto overflow-y-hidden duration-300" + (isActiveNavbar ? ' h-auto bg-base-100 text-base-content' : '') }>
        <div className="w-2/4 md:w-auto md:flex-1">
          <Link href='/'>
            <span className="text-xl font-bold font-playFair normal-case">
              Mohamed
            </span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-auto order-3 md:order-none" onClick={() => setActiveNavbar(!isActiveNavbar)}>
          <Link href='/' className={(asPath === '/' ? 'active' : '') + ' btn btn-ghost w-full md:w-auto'} >Home</Link>
          <Link href='/projects' className='btn btn-ghost w-full md:w-auto'>Projects</Link>
        </div>
        <div className="w-2/4 md:w-auto flex justify-end">
          <Button color="ghost" className="text-opacity-0" onClick={() => SwitchTheme()}>
            {
              theme ? 
                (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>)
                : (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>)
            }
          </Button>
          <Button color="ghost" target={"_blank"} href="https://github.com/m7md0a">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-block h-5 w-5 fill-current md:h-6 md:w-6"><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path></svg>
          </Button>
          <Button color="ghost" className="md:hidden" onClick={() => setActiveNavbar(!isActiveNavbar)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" /></svg>
          </Button>
        </div>
      </Navbar>
    </div>
  )
}

export default NavbarComponent