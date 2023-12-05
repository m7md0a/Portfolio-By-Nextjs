import NavBar from "@/components/Navbar.jsx"
import FooterApp from "@/components/FooterApp.jsx"
export default function dl({children}) {
  return (
     <div>
        <NavBar />
        <div className="min-h-screen mt-20 bg-base-200 bg-opacity-50">
           {children}
        </div>
         <FooterApp />
     </div>
  )
}