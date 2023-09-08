import { motion } from 'framer-motion'
import { DiGoogleAnalytics } from 'react-icons/di'
import { LuMonitor } from 'react-icons/lu'
import { AiFillBuild } from 'react-icons/ai'


const Card = ({ id, title, description, text }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
      variants={{
        hover: {
          scale: 1.02,
        },
      }}
      className="relative mb-3
       h-196 w-80 shrink-0 overflow-hidden rounded-xl bg-[#1F3E76] p-8"
    >
      <div className="relative z-10 text-[#f8f9fa]">
        {id === 1 ? (<DiGoogleAnalytics className="text-[1.5rem]" />)
        : id === 2 ? (<LuMonitor className="text-[1.5rem]" />)
        : id === 3 ? (<AiFillBuild className="text-[1.5rem]" />)
        : null}
        <motion.span
          initial={{ scale: 0.9 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: 'backInOut',
          }}
          className="my-2 block origin-top-left font-mono text-4xl font-black leading-[1.2]"
        >
          {title}
          <br />
          <p className="text-sm">{description.toUpperCase()}</p>
        </motion.span>
        <p className="text-md">{text}</p>
      </div>
      <Background />
    </motion.div>
  )
}

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: 'backInOut',
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#26447A"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: 'backInOut',
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#26447A"
      />
    </motion.svg>
  )
}

export default Card;