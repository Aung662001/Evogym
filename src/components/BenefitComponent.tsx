import { SelectedPage } from '@/App';
import { motion } from 'framer-motion';
import {v4 as uuid} from "uuid"



type Props={
    setSelectedPage:(value:SelectedPage)=>void
    title:string;
    icon:JSX.Element;
    paragraph:string;
}
export default function BenefitComponent({setSelectedPage,icon,title,paragraph}:Props) {
  return (<section>
  <motion.div className=' max-w-[450px] min-h-[270px] border-2 rounded-md my-4 overflow-hidden'
                        initial="hidden"
                        whileInView="visible"
                       viewport={{once:false , amount:0.5}}
                       transition={{duration:0.5}}
                       variants={{hidden:{opacity:0 ,x:-80},visible:{opacity:1,x:0}
                    }}

  >
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-10 rounded-full bg-primary-300 p-4 text-white'>{icon}</div>
        <div><h2 className='text-black font-bold my-3'>{title}</h2></div>
        <div className='text-sm px-4'>{paragraph}</div>
        <button className='text-rose-600 underline my-3'>SeeMore</button>
      </div>
  </motion.div>
 
  </section>
  )
}
