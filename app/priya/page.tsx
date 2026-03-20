'use client'

import localFont from 'next/font/local'
import { Courier_Prime } from 'next/font/google'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const stkBureauSerif = localFont({
  src: [
    {
      path: '../../public/fonts/STKBureauSerif-Light-Trial.otf',
      weight: '300',
    },
    {
      path: '../../public/fonts/STKBureauSerif-Book-Trial.otf',
      weight: '400',
    },
  ],
  variable: '--font-stk-bureau',
})

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-courier',
})


export default function PriyaPage() {
  const photoRef = useRef(null)
  const textRef = useRef(null)

  // amount: 0.5 — waits until half the polaroid is in view
  const photoInView = useInView(photoRef, { once: true, amount: 0.5 })
  const textInView = useInView(textRef, { once: true, amount: 0.8 })

  return (
    <div
      className={`${stkBureauSerif.variable} ${courier.variable} min-h-screen bg-white`}
    >
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center">
        <motion.h1
          className="font-[family-name:var(--font-stk-bureau)] text-[60px] font-light leading-[1.2] text-black"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Hi there,
        </motion.h1>
        <motion.p
          className="mt-4 font-[family-name:var(--font-stk-bureau)] text-[20px] font-light tracking-[0.18em] text-black opacity-30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          scroll down
        </motion.p>
      </section>

      {/* Polaroid + Message Section */}
      <section className="flex flex-col items-center px-8 pb-40 pt-8">
        {/* Polaroid */}
        <motion.div
          ref={photoRef}
          style={{
            position: 'relative',
            width: '270px',
            height: '403px',
            backgroundColor: '#EEEEEE',
            rotate: '-5.6deg',
            boxShadow: '2px 5px 8px 2px rgba(0,0,0,0.12)',
            cursor: 'pointer',
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={photoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08, rotate: '-3deg', boxShadow: '4px 10px 20px 4px rgba(0,0,0,0.15)' }}
        >
          <img
            src="https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM4T8QAG6AP040N0RYZT5YHW.jpg"
            alt="Tampa 2014"
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              width: '240px',
              height: '320px',
              objectFit: 'cover',
            }}
          />
          <span
            className="font-[family-name:var(--font-courier)] text-[12px] text-black"
            style={{
              position: 'absolute',
              bottom: '18px',
              right: '15px',
              opacity: 0.76,
            }}
          >
            tampa 2014
          </span>
        </motion.div>

        {/* Message — staggered lines */}
        <div ref={textRef} className="mt-24 flex flex-col items-center text-center font-[family-name:var(--font-stk-bureau)] text-[24px] font-light leading-[40px] text-black">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            Priya, thank you for always being an older sister to me.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
          >
            Will you be my groomswoman?
          </motion.span>
        </div>
      </section>
    </div>
  )
}
