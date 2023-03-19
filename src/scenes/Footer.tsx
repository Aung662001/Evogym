import Logo from "@/assets/Logo.png"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { PhoneIcon } from "@heroicons/react/24/solid"
export default function Footer() {
  return (<footer className="bg-primary-100 py-16 mt-10">        
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
       <div>
        <img alt="footerLogo" src={Logo}/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aut. Nesciunt officiis voluptate numquam aliquid? Optio nihil culpa esse explicabo saepe corporis sed, earum placeat excepturi consequuntur voluptate exercitationem assumenda!</p>
        <p className="text-sm mt-6">	&#169;Evogym all right reserved</p>
        </div>
       <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Contact from here</h1>
        <span className="flex flex-row"><PhoneIcon className="h-6 w-6"/>+95-9973123062</span>
        <a href="#" className="flex flex-row"><EnvelopeIcon className="w-6 h6"/>winnmyoaung49@gmail.com</a>
        <a ></a>
       </div>
    </div>
  </footer>
    
  )
}
