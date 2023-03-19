import Navbar from "./scenes/navbar"
import { useEffect, useState } from "react";
import Home from "./scenes/Home";
import Benefit from "./scenes/Benefit";
import OurClasses from "./scenes/OurClasses"
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";


export enum SelectedPage{
  Home="home",
  Benefit="benefits",
  OurClasses="ourclasses",
  ContactUs="contactus"
}
function App() {
   const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true)
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
useEffect(()=>{
  const handleScroll = () =>{
    if(window.scrollY === 0){
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if(window.screenY !== 0) setIsTopOfPage(false)
    window.addEventListener("scroll",handleScroll)
    return ()=>window.removeEventListener("scroll",handleScroll)
  }
},[])

  return <div className="bg-gray-20 app">
    <Navbar
    isTopOfPage={isTopOfPage}
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}/>
     <Home setSelectedPage={setSelectedPage}/>
     <Benefit setSelectedPage={setSelectedPage}/>
     <OurClasses setSelectedPage={setSelectedPage}/>
     <ContactUs setSelectedPage={setSelectedPage}/>
     <Footer />
     </div>;
}

export default App;
