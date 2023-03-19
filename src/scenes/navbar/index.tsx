import Logo from "@/assets/Logo.png"
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid"
import {Link} from "./Link"
import { selectedPage } from "./Link"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useState } from "react"
import ActionButton from "@/share/ActionButton"


type NavbarProps={
    isTopOfPage:boolean
}&selectedPage
export default function Navbar({isTopOfPage,selectedPage,setSelectedPage}:NavbarProps) {
    const [menuToggle,setMenuToggle] = useState(false)
    
  const flexBetween ="flex items-center justify-between"
  const isAboveMedianScreen = useMediaQuery("(min-width:978px)");
  const NavbarBackground = !isTopOfPage ? "" :"bg-primary-100 "
  return (
    <nav>
        <div 
        className={`${flexBetween} ${NavbarBackground} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side  */}
                    <img alt="logo" src={Logo}/>
                    {/* end left */}
                    {/* right side */}
                    {isAboveMedianScreen?(
                    <div className={`${flexBetween} w-full `}>
                        {/* links */}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link page="Benefits" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link page="OurClasses"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        </div>
                        {/* end links */}
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                        </div>
                    </div>):(
                     <button className="rounded-full p-2 bg-secondary-500  " 
                    onClick={()=>setMenuToggle(!menuToggle)}>
                        {!menuToggle && <Bars3Icon className="h-6 w-6 text-white z-10"/>}
                        {menuToggle && <XMarkIcon className="h-6 w-6 text-white"/>}
                    </button>
                    )}
                </div>
            </div>
        </div>
        {/* mobile modal */}
        {!isAboveMedianScreen && menuToggle && (
            <div className="fixed flex flex-col  items-center justify-center bottom-0 h-full z-20 
            opacity-50 w-[300px] right-0 bg-primary-100 drop-shadow-sm ">
                    {/* Menu items */}
                    <div className={` h-4/6 gap-8 text-sm flex flex-col items-center justify-center gap-10s`}>
                            <Link page="Home" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link page="Benefits" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link page="OurClasses"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        </div>
            </div>
        )}
    </nav>
  )
}
