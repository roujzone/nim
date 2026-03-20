'use client'

import localFont from 'next/font/local'
import { Courier_Prime } from 'next/font/google'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const stkBureauSerif = localFont({
  src: [
    {
      path: '../public/fonts/STKBureauSerif-Light-Trial.otf',
      weight: '300',
    },
    {
      path: '../public/fonts/STKBureauSerif-Book-Trial.otf',
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

export type Photo = {
  src: string
  caption: string
}

export type PersonPageProps = {
  body: string
  ask: string
  photos: [Photo, Photo]
}

export default function PersonPage({ body, ask, photos }: PersonPageProps) {
  const photosRef = useRef(null)
  const textRef = useRef(null)

  const photosInView = useInView(photosRef, { once: true, amount: 0.4 })
  const textInView = useInView(textRef, { once: true, amount: 0.6 })

  const bodyLines = body.split('\n')

  return (
    <div
      className={`${stkBureauSerif.variable} ${courier.variable} min-h-screen bg-white`}
    >
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center">
        <motion.h1
          className="font-[family-name:var(--font-stk-bureau)] text-[60px] leading-[1.2] font-light text-black"
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

      {/* Photos */}
      <section
        ref={photosRef}
        className="flex flex-wrap justify-center gap-16 px-8 pt-8 pb-16"
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            style={{
              position: 'relative',
              width: '270px',
              height: '403px',
              backgroundColor: '#EEEEEE',
              rotate: i === 0 ? '-5.6deg' : '3.2deg',
              boxShadow: '2px 5px 8px 2px rgba(0,0,0,0.12)',
              cursor: 'pointer',
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={photosInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.15,
            }}
            whileHover={{
              scale: 1.08,
              rotate: i === 0 ? '-3deg' : '1.5deg',
              boxShadow: '4px 10px 20px 4px rgba(0,0,0,0.15)',
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
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
              {photo.caption}
            </span>
          </motion.div>
        ))}
      </section>

      {/* Message */}
      <section className="flex flex-col items-center px-8 pt-8 pb-40">
        <div
          ref={textRef}
          className="flex max-w-xl flex-col items-start text-left font-[family-name:var(--font-stk-bureau)] text-[22px] leading-[38px] font-light text-black"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
          >
            {bodyLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < bodyLines.length - 1 && <br />}
              </span>
            ))}
          </motion.span>
          <motion.span
            className="mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.35,
            }}
          >
            {ask}
          </motion.span>
        </div>
      </section>
    </div>
  )
}
