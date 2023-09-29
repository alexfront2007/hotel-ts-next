'use client'
import React, { ChangeEvent, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { slideIn } from '../utils/motion'

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // emailjs
    //   .send(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: 'Alex',
    //       from_email: form.email,
    //       to_email: 'alex@gmail.com',
    //       message: form.message,
    //     },
    //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false)
    //       alert('Thank you. I will get back to you as soon as possible.')

    //       setForm({
    //         name: '',
    //         email: '',
    //         message: '',
    //       })
    //     },
    //     (error) => {
    //       setLoading(false)
    //       console.error(error)

    //       alert('Ahh, something went wrong. Please try again.')
    //     }
    //   )
  }

  return (
    <div
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      id='contact'
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit shadow-md shadow-primary'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )
})

export default Contact
