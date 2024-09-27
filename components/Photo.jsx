"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn"}, }}>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeInOut"}, }} className="w-[298px] h-[498px] xl:w-[300px] xl:h-[382px]">
          <Image src="/assets/avatar.svg" priority quality={100} alt="" fill className="object-contain" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
