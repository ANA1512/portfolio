import {useState, useRef} from 'react'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'
import SectionWrapper from '../component/hoc/SectionWrapper';
import { textVariant, fadeIn } from '../utils/motion';
import  '../index.css'


function ContactInfo() {


  const formRef= useRef(); 

  const [form, setForm] =useState({

     name: '',
     email: '',
     message: '',
  })

  const [loading, setLoading] = useState(false); 
  
  const handleChange = (e) =>{
    const {name,value} =e.target;
    setForm({...form,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_sp8bxwk",
      "template_w2i0of7",
      {
        from_name: form.name,
        to_name: 'Anais',
        from_email: form.email,
        to_email: 'anais_philocles@yahoo.fr',
        message:form.message,
      },
      "5ylTwrYK3HqTcMTUm"

      )
      .then(()=>{
        setLoading(false);
        alert('Thank you I will get back to you as soon as possible');
        setForm({
         name:'',
         email:'',
         message:'',
        })
      
      },(error)=>{
        setLoading(false)
        console.log(error)
        alert('something went wrong')
      })
  }
 

  return (

    <div>
        <motion.div
        variants={textVariant()}
        className="sm:flex  text-center flex-col lg:flex justify-center items-center">
        <h1 className='text-secondary text-5xl flex justify-center'>Contact Me</h1>
         <p className='text-secondary'>
           Let's work together to bring your ideas to life!
           Feel free to reach out...
        </p>
        </motion.div>
      
      {/* Create form  */}
       <motion.div
        variants={fadeIn("","",0.1,1)}
        className= "flex-[0.50] p-8 bg-transparent  mt-10 justify-center items-center  border-2 border-white shadow-lg">

      <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className= "mt-12 flex flex-col gap-8 ">

      {/* name  */}
      <div className="App  flex flex-col justify-start items-start w-full " >
     
        <label className='relative cursor-pointer w-full'>
          <input 
            type="text" 
            placeholder="Input" 
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className='h-20 w-full px-6 text-2xl py-1 border-0 border-b-8 border-white focus:outline-none border-opacity-50 outline-none focus:border-b-[#847575]
            focus:border-b-3 bg-transparent placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-[#847575]' />
            <span className='text-2xl text-[#847575] text-opacity-80 absolute left-5 top-5 px-1 transition duration-200 input-text'>
             What's your name?
            </span>
        </label>
      
       {/* Email */}
      <div className="App  flex flex-col justify-start items-start w-full mt-10">
        <label className='relative cursor-pointer w-full'>
          <input 
            name="email"
            type="email"
            placeholder="Input" 
            value={form.email}
            onChange={handleChange}
            required
            className='h-20 w-full px-6 text-2xl py-1 border-0 border-b-8 border-white focus:outline-none border-opacity-50 outline-none focus:border-b-[#847575]
            focus:border-b-3 bg-transparent placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-[#847575]' />
            <span className='text-2xl text-[#847575] text-opacity-80absolute left-5 top-5 px-1 transition duration-200 input-email'>
              Write your email please
            </span>
      </label>
      </div>
     
      {/* Your message */}
      <div className=" flex flex-col  justify-start items-start w-full mt-10">
        <label className='relative cursor-pointer w-full'>
          <textarea
            name="message"
            type="textarea"
            placeholder="Input" 
            rows="3"
            value={form.message}
            onChange={handleChange}
            required
            className='h-20 w-full px-6 text-2xl py-1 border-0 border-b-8 border-white focus:outline-none border-opacity-50 outline-none focus:border-b-[#847575]
            focus:border-b-3 bg-transparent placeholder-gray-300 placeholder-opacity-0 transition duration-200 text-[#847575]' />
            <span className='text-2xl text-[#847575] text-opacity-80 absolute left-5 top-5 px-1 transition duration-200 input-textarea'>
              Write your message please
            </span>
      </label>
      </div>
   
      {/* button */} 
      <button 
      type='submit' 
      className="py-3 px-8 w-fit  rounded-full sm:text-4  border-2 border-[#FEF2F2] p-2 text-2xl text-[#FA7D5E] mt-5 mb-5 hover:shadow-lg " >
        {loading ? "Sending..." : "Send"}
      </button>

      </div>
      </form>
        </motion.div>
    </div> 
  )
}


export default SectionWrapper(ContactInfo);
