import React from 'react'
import './Home.css'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

function Home() {
  return (
    <div className='home'>
      <div className="contact">
        <div className="contact-page">
          <div className="contact-div">
            <span className='contact-text1'>Biz bilan bog'lanish</span>
          </div><br />
          <span className='contact-text2'>Biz bilan bog'laning. Xabaringizni <br /> kutamiz</span><br />
          <div className="contact-text-page">
            <div className="contact-div1">
              <IoLocationOutline className='location' />
              <span className='contact-text3'>Manzil</span>
              <span className='conatct-text4'>Namangan shahar, chorsu davlat <br /> xizmatlari yonida</span>
            </div>
            <div className="contact-div2">
              <MdOutlinePhoneInTalk className='location' />
              <span className='contact-text3'>Telefon</span>
              <span className='conatct-text4'>Bog'lanish uchun telefon raqam +998 95 061 64 66</span>
            </div>
            <div className="contact-div3">
              <MdOutlineMail className='location' />
              <span className='contact-text3'>Email manzil</span>
              <span className='conatct-text4'>datasiteacademy@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home