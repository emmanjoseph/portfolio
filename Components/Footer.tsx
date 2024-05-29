import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className='w-full py-10 ' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid"
            className='w-full h-full opacity-50'
            />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital experience to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and lets discuss how to reach your goals</p>
            <a href="mailto:emmajoseph607@gmail.com">
                <MagicButton
                title='Lets get in touch'
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
            <div className='mt-10 w-full flex items-center justify-between gap-2 md:gap-16'>
                <div className='w-full flex gap-1 items-center'>
                    <img src="/me.jpg" alt="me"
                    className='w-[50px] h-[50px] object-contain rounded-full'
                    />

                    <h3>Emmanuel Mulwa <span>+254 00441147</span></h3>
                </div>
                <div className='flex items-center gap-3'>
                    <a href="" className='p-2 rounded-full border-white border'><FaWhatsapp size={15}/></a>
                <a href="" className='p-2 rounded-full border-white border'
                ><FaXTwitter size={15}/></a>
                <a href="" className='p-2 rounded-full border-white border'
                ><FaInstagram size={15}/></a>
                <a href="" className='p-2 rounded-full border-white border'
                ><CiLinkedin size={15}/></a>
                </div>
                
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
