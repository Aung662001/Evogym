import { SelectedPage } from "@/App"
import { motion } from "framer-motion"
import { setSelectedPage } from "./navbar/Link"
import {useForm} from "react-hook-form"
import contactUsGraphic from "@/assets/ContactUsPageGraphic.png"



export default function ContactUs({setSelectedPage}:setSelectedPage) {
    const {register,trigger,formState:{errors}}= useForm()
    const handleSubmit=async(e:React.FormEvent)=>{
        const isValid= await trigger()
        if(!isValid) {
            e.preventDefault()
        }

    }
  return (<section id="contactus">

      <motion.div 
      onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
      >
    <div className="md:flex md:flex-row">

    <div className="md:w-3/5 gap-10 flex flex-col">
        <div>
            <div><h1 className="text-gray-500 font-bold text-2xl ml-10 pt-10">
                JOIN NOW FOR YOUR <span className="text-red-600">ATTRACTIVE BODY!</span>
                </h1></div>
            <div><p className="ml-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro ullam aliquid, impedit atque debitis tempore illo ad voluptas dolorem adipisci voluptatibus, molestiae reprehenderit magnam laboriosam velit voluptate eius. Distinctio!
            </p></div>
        </div>
        <motion.div
                 initial="hidden"
                 whileInView="visible"
                viewport={{once:false , amount:0.3}}
                transition={{delay:.5, duration:0.5}}
                variants={{hidden:{opacity:0 ,x:-80},visible:{opacity:1,x:0}
             }}
        >
            <form target="_blank" onSubmit={(e)=>handleSubmit(e)}
            method="POST"
            action="https://formsubmit.co/winnmyoaung49@gmail.com"
            className="flex flex-col ml-20 w-full gap-6"

            >
                {/* //////////////////////// */}
                <input type="text" required className="bg-primary-500 rounded-md px-2 py-2 w-2/3
                 placeholder:text-white placeholder:text-2xl placeholder:ml-0" placeholder="Enter Your Name"
                 {...register("name",{
                    required:true,
                    maxLength:100
                 })}
                 >
                 </input>
                 
          {errors.name && 
          (
            <p className="mt-1 text-red-900 ">
                {errors.name.type==="required" && "Name is require"}
                {errors.name.type === "maxLength" && "Max Length is 100 words"}
            </p>
          )
          }
          {/* //////////////////////// */}
          <input required type="text" className="bg-primary-500 rounded-md px-2 py-2 w-2/3
                 placeholder:text-white placeholder:text-2xl" placeholder="Enter Your Email"
                 {...register("email",{
                    required:true,
                 })}
                 >
                 </input>
                 
          {errors.email && 
          (
            <p className="mt-1 text-red-900 absolute ">
                {errors.email.type==="required" && "Email is require"}
            </p>
          )
          }
          {/* /////////////////////// */}
          <textarea
          rows={4}
          className="bg-primary-500 rounded-md px-2 py-2 w-2/3 
          placeholder:text-white placeholder:text-2xl" placeholder="Message"
          ></textarea>
          <button type="submit"
          className="rounded-md w-48 bg-primary-500 px-20 py-2 hover:bg-primary-300"

          >
            Send
          </button>
            </form>
        </motion.div>
        </div>
        <div>
        <motion.div className="relative md:top-0 mt-40"
       
        >
          <div className="md:before:content-evolvetext md:before:absolute md:before:-bottom-24 
          md:before:-left-20 ">
            <img alt="contactImg" src={contactUsGraphic} className="m-auto mt-20 relative"/>
          </div>
        </motion.div>
        </div>
    </div>
      </motion.div>
  </section>
  )
}
