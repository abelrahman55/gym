import './join.css';
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
const Join = () => {
  const form =useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_t16jan7','template_ob573w6',form.current,'UMqldnRwetHdZUucB')
    .then((result)=>{
      console.log(result.text);
    },(error)=>{
      console.log(error.text);
    })
  }
  return (
    <div className='join'>
      <div className="left-join">
        <div>
          <span className='stroke-text'>Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className='stroke-text'>with us?</span>
        </div>
      </div>
      <div className="right-join" onSubmit={sendEmail}>
        <form ref={form} >
          <input type="email" name='user_email' placeholder='Enter Your Email Address here'/>
          <button>
            Join now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Join