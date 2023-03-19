import { setSelectedPage } from "./navbar/Link";
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"
import { motion } from "framer-motion";
import { SelectedPage } from "@/App";
import data from "../raw-data/data.json";
import BenefitComponent from "@/components/BenefitComponent";
import ActionButton from "@/share/ActionButton";

export default function Benefit({setSelectedPage}: setSelectedPage) {
  let icons=[
    {icon:<HomeModernIcon className="h-6 w-6"/>,
    "paragraph":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, at. Tempore aspernatur consequuntur esse earum? Dicta numquam doloremque voluptatum vel, eaque, explicabo eum quos aperiam quibusdam magnam cupiditate provident culpa?.",
    "title":"Hello IT field,Wellcome Me?"},
    {icon:<UserGroupIcon className="h-6 w-6"/>,
    "paragraph":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, at. Tempore aspernatur consequuntur esse earum? Dicta numquam doloremque voluptatum vel, eaque, explicabo eum quos aperiam quibusdam magnam cupiditate provident culpa?.",
    "title":"Hello IT field,Wellcome Me?"},
    {icon:<AcademicCapIcon className="h-6 w-6"/>,
    "paragraph":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, at. Tempore aspernatur consequuntur esse earum? Dicta numquam doloremque voluptatum vel, eaque, explicabo eum quos aperiam quibusdam magnam cupiditate provident culpa?.",
    "title":"Hello IT field,Wellcome Me?"},
  ]
  
  return <section 
  id="benefits"
  className=" min-h-full  py-20 w-5/6">
    <div>
      <h1 className="text-lg font-bold ml-7">MORE THAN JUST A GYM</h1>
      <p className=" mt-3 ml-20 text-sm">{data[0].paragraph}{data[0].paragraph}</p>
    </div>
    <motion.div className="mt-8 w-full flex items-center flex-col"
     onViewportEnter={()=>setSelectedPage(SelectedPage.Benefit)}>
         <div className="">
          {/* icom */}
          <div className= " flex flex-row flex-wrap  mt-5 items-center justify-around ml-10">
            {icons.map((d,index)=>{
              return(<>
                  <BenefitComponent key={index} setSelectedPage={setSelectedPage}
                  title={d.title}
                  paragraph={d.paragraph}
                  icon={d.icon}
                  />


               </>
              )

            })}
          </div>
        </div>      
        
    </motion.div>
    
                {/* graphic and description */}
                <motion.div 
                className="md:flex md:flex-row my-10"
                 initial="hidden"
                 whileInView="visible"
                viewport={{once:false , amount:0.3}}
                transition={{duration:0.5}}
                variants={{hidden:{opacity:0 ,x:80},visible:{opacity:1,x:0}
             }}
                >
                    {/* graphic */}
                    <img src={BenefitPageGraphic} className="m-auto"/>
                  <div className="">
                    <div className='relative top-0 m-10 ml-10 text-white '>
                      <div className='before:absolute before:-top-20 before:-left-10 before:z-[-1] before:content-abstractwaves'>
                      </div>
                      <h1 className="text-gray-500 font-bold text-2xl">GROW YOUR MUSCLES,FAST AND FIT SMART GUIDELINES</h1>
                    </div>
                    {/* deacription */}
                    <div className="ml-20 ">
                      {data[0].paragraph}
                      {data[0].paragraph}<br></br><br></br>
                      {data[0].paragraph}

                    </div>
                    <div className="relative">
                      <div className="before:absolute m-10 ml-20 before:-mb-20 before:right-52 before:z-[-1] before:content-sparkles">
                      <ActionButton setSelectedPage={setSelectedPage} >Join Now</ActionButton>

                      </div>
                    </div>
                  </div>
                  </motion.div>
  </section>
}