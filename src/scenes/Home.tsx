import React from 'react'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponserRedBull from "@/assets/SponsorRedBull.png"
import SponserFortune from "@/assets/SponsorFortune.png"
import SponserForbes from "@/assets/SponsorForbes.png"
import { setSelectedPage } from './navbar/Link'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/share/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/App'

export default function Home({setSelectedPage}:setSelectedPage) {
  const isAboveMedianScreen = useMediaQuery("(min-width:978px)");
    
  return <section
  id='home'
  className='gap-16 bg-gray-20 py-20 md:h-full md:pb-0'>
    {/* Image ,main header */}
    <motion.div className="md:flex mx-auto w-5/6 items-center md:5/6 "
                onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
    >
        {/* main header */}
        <div className='z-10 mt-22 md:basis-3/5'>
           <motion.div className='md:-mt-30'
                       initial='hidden'
                       whileInView="visible"
                       viewport={{once:true , amount:0.5}}
                       transition={{duration:0.5}}
                       variants={{hidden:{opacity:0 ,x:-80},visible:{opacity:1,x:0}
                    }}
                      >
                <div className='relative'>
                    <div className='before:absolute before:-top-20  before:content-evolvetext before:z-[-20] before:-left-20'>
                        <img alt='honepage-text ' src={HomePageText}/>
                    </div>
                </div>
                <p className='mt-6 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, adipisci repellat! Impedit similique praesentium, aperiam magnam minus quo! Animi repudiandae rerum eos quasi, necessitatibus molestias error cupiditate minima. Soluta, nulla.</p>
           </motion.div>
           <motion.div className='mt-8 flex items-center gap-8 flex-wrap'
            initial='hidden'
            whileInView="visible"
            viewport={{once:true , amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{hidden:{opacity:0 ,x:-100},visible:{opacity:1,x:0}
         }}>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink className='font-sm underline font-bold text-primary-500 hover:text-secondary-500'>Learn More</AnchorLink>
           </motion.div>
        </div>
        {/* image */}
        <div className='flex z-20'>
            <img alt='homepage-graphic ' src={HomePageGraphic}/>
        </div>
    </motion.div>
    {/* sponser */}
    {isAboveMedianScreen && <div className='bg-primary-100 p-8 m-4'>
        <div>
            <div className='flex justify-around'>
                <img alt="red-bull-img" src={SponserRedBull}/>
                <img alt="red-bull-img" src={SponserFortune}/>
                <img alt="red-bull-img" src={SponserForbes}/>
            </div>
            
        </div>
    </div>}
    
  </section> 
}
