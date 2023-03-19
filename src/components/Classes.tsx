import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
interface ClassProps{
    image:string;
    title:string;
    paragraph:string;
}
export default function Classes({image,title,paragraph}:ClassProps) {
    const overlayStyle = `p-5 absolute z-30 flex h-full w-[450px] 
    rounded-md flex-col items-center justify-center whitespace-normal bg-primary-500 gap-10
     text-center text-white opacity-0 transition duration-500 hover:opacity-70`

  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px] '>
        <div className= {overlayStyle}>
            <h1 className="font-bold">{title}</h1>
            <p className="w-[450px] ">{paragraph}</p>
        </div>
           <img alt={image} src={image} className='rounded-md '/>
        
    </li>
  )
}
