import React,{useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_u0vaacm', 'template_rzlcjit', form.current, {
            publicKey: 'JIqbpne1dmoOi8Qi5',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className='Join' id='Join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>ELEVATE YOUR</span>
            </div>
            <div>
                <span>FITNESS JOURNEY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email address'/>
                <button className="btn-j">Join Now</button>
            </form>
        </div>
    </div>


  )
}

export default Join