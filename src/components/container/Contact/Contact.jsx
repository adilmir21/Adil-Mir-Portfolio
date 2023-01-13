import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_zxqlmrp', 'template_dj9t85a',form.current, 'AtSnyiIazz6gGCaMp')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>😁</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
          {socialIcons.map(socials => {
            return (
              <div key={socials.id} >
                <a href={socials.links}
                target="_blank"
                rel="noreferrer"
                >
                  {socials.icon}
                  </a>
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <input type="text" placeholder='First Name' name='firstName'/>
            <input type="text" placeholder='Last name' name='lastName'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' name='phone'/>
            <input type="email" placeholder='Email' name='email' />
          </div>
          <div className="row">
            <textarea placeholder='message' name='message'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
           <input type="submit" className="flat-button" value="SEND" />
          </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact