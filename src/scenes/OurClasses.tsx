import { setSelectedPage } from './navbar/Link'

import { motion } from 'framer-motion'
import { SelectedPage } from '@/App'
import Classes from '@/components/Classes'
import image1 from "@/assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"


type Props = {}

const OurClasses = ({setSelectedPage}:setSelectedPage) => {

 const OurClassesText =  [
    {
    "paragraph":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, at. Tempore aspernatur consequuntur esse earum? Dicta numquam doloremque voluptatum vel, eaque, explicabo eum quos aperiam quibusdam magnam cupiditate provident culpa?.",
    "title":"Hello IT field,Wellcome Me?",
    "image":image1,
    
},
{
    "paragraph":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, at. Tempore aspernatur consequuntur esse earum? Dicta numquam doloremque voluptatum vel, eaque, explicabo eum quos aperiam quibusdam magnam cupiditate provident culpa?.",
    "title":"Hello IT field,Wellcome Me?",
    "image":image2,
    
},
{
    "paragraph":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, at. Tempore aspernatur consequuntur esse earum? Dicta numquam doloremque voluptatum vel, eaque, explicabo eum quos aperiam quibusdam magnam cupiditate provident culpa?.",
    "title":"Hello IT field,Wellcome Me?",
    "image":image3
    
},
{
    "paragraph":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, at. Tempore aspernatur consequuntur esse earum? Dicta numquam doloremque voluptatum vel, eaque, explicabo eum quos aperiam quibusdam magnam cupiditate provident culpa?.",
    "title":"Hello IT field,Wellcome Me?",
    "image":image4
    
},
{
    "paragraph":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, at. Tempore aspernatur consequuntur esse earum? Dicta numquam doloremque voluptatum vel, eaque, explicabo eum quos aperiam quibusdam magnam cupiditate provident culpa?.",
    "title":"Hello IT field,Wellcome Me?",
    "image":image5
    
},
{
    "paragraph":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, at. Tempore aspernatur consequuntur esse earum? Dicta numquam doloremque voluptatum vel, eaque, explicabo eum quos aperiam quibusdam magnam cupiditate provident culpa?.",
    "title":"Hello IT field,Wellcome Me?",
    "image":image6
    
}
]





    return (<section id='ourclasses'>
    <motion.div className='bg-primary-100'
    onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
    initial="hidden"
    whileInView="visible"
   viewport={{once:false , amount:0.3}}
   transition={{duration:0.5}}
   variants={{hidden:{opacity:0 ,y:-80},visible:{opacity:1,x:0}
}}
    >
      <h1 className="text-gray-500 font-bold text-2xl ml-10 pt-10">OUR CLASSES</h1>
        <div className='ml-20 my-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium ullam ipsa minus ex reprehenderit quisquam rem dolores? Iure odio facilis cupiditate cumque nesciunt fugiat aliquid quod, omnis odit blanditiis.</div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden '>
          <ul className='w-2800px] whitespace-nowrap '>
          {OurClassesText.map((ClassData,index)=>{
           return <Classes 
            key={index}
            image={ClassData.image}
            title={ClassData.title}
            paragraph={ClassData.paragraph}
            />
          })}
          </ul>
      
        </div>
    </motion.div>
    </section>
  )
}
export default OurClasses