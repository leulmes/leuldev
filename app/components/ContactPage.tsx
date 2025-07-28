import React, { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import { toast } from 'sonner'

const ContactPage = () => {
  const [submitState, setSubmitState] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const buttonText = ''

  useEffect(() => {
    console.log('Submit button state: ', submitState)
    console.log('Btn: ', buttonText)
  }, [submitState, buttonText])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // prevents a default page reload
    setSubmitState((pv) => !pv)

    // data to send to emailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Leul Mesfin',
      message: message,
    }

    try {
      const resp = await fetch('/api', {
        method: 'POST',
        body: JSON.stringify(templateParams),
      })
      if (resp.ok) {
        console.log('Email sent!', resp)
        setSubmitState((pv) => !pv)
        toast.success('Message sent!')
      } else {
        console.log('Message failed to send', resp)
      }
      console.log('status: ', resp)
    } catch (error) {
      return error
    }
  }

  return (
    <div className='font-main flex h-[450px] w-[90%] flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter md:w-full'>
      <form
        onSubmit={handleSubmit}
        className='mt-4 flex flex-col items-center justify-center'
      >
        <div className='mb-3 flex flex-col gap-1'>
          <label htmlFor='name' className='text-left text-white'>
            Name
          </label>
          <input
            type='input'
            id='name'
            className='h-10 w-80 rounded border border-white pl-2 text-white'
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>

        <div className='mb-3 flex flex-col gap-1'>
          <label htmlFor='email' className='text-left text-white'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='h-10 w-80 rounded border border-white pl-2 text-white'
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>

        <div className='mb-3 flex flex-col gap-1'>
          <label htmlFor='message' className='text-left text-white'>
            Message
          </label>
          <textarea
            id='message'
            className='h-40 w-80 rounded border border-white pt-2 pl-2 text-white'
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type='submit'
          className='h-8 w-16 cursor-pointer rounded border border-white bg-white text-black'
        >
          {submitState ? <LoadingSpinner /> : 'Send'}
        </button>
      </form>
    </div>
  )
}

export default ContactPage
