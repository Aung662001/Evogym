import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/App"

export type setSelectedPage={
  setSelectedPage:(value:SelectedPage)=>void
}
export type selectedPage = {
    selectedPage:SelectedPage;
}&  setSelectedPage;

type Props={
  page:string;
}&selectedPage;

export const Link = ({page,selectedPage,setSelectedPage}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SelectedPage;
  console.log(selectedPage,lowerCasePage);
  
  return (
    <div>
        
        <AnchorLink 
        className={`${selectedPage === lowerCasePage ? "text-primary-500 shadow-xl shadow-black ": ""} 
        transition duration-500 hover:text-yellow-600 font-bold hover:shadow-xl hover:shadow-black  `}
        href={`#${lowerCasePage}`}
        onClick={()=>setSelectedPage(lowerCasePage)}>
 
            {page}
        </AnchorLink>
    </div>
  )
}