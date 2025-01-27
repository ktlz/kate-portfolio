"use client"

import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaTelegram, FaInstagram } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"

const socials = [
  { icon: <FaGithub />, path: "", text: 'GitHub: ktlz' },
  { icon: <FaLinkedinIn />, path: "www.linkedin.com/in/kateryna-shulha-3872401b1", text: 'LinkedIn' },
  { icon: <FaTelegram />, path: "", text: 'Telegram Channel' },
  { icon: <FaInstagram />, path: "", text: 'Instagram' },
]

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <h2 className="h2 mb-10 text-center">
          Contact Me
        </h2>

        <div className="grid grid-cols-4 justify-items-center mb-10">
          {socials.map((item, index) => {
            return (
              <div>
                <Link key={index} href={item.path} className='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duratio'>
                  {item.icon}
                </Link>
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input className="mb-4" placeholder="First Name" {...register("firstName")} />
          <Input className="mb-4" placeholder="Email" {...register("email")} />
          <Input className="mb-4" placeholder="Message" {...register("message")} />

          <Button  type="submit">Submit</Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
