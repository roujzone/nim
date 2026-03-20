'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { SectionDivider } from '@/components/ui/grid-layout'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from '../data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectImageProps = {
  src: string
}

function GridPlaceholder() {
  return (
    <svg
      className="aspect-[4/3] h-auto w-full"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect
        width="400"
        height="300"
        className="fill-white dark:fill-zinc-950"
      />
      {/* Grid pattern */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            className="stroke-[#f0f0f0] dark:stroke-[#202020]"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#grid)" />
    </svg>
  )
}

function ProjectImage({ src }: ProjectImageProps) {
  const isPlaceholder = src.includes('blank.png')

  if (isPlaceholder) {
    return <GridPlaceholder />
  }

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <img
          src={src}
          alt="Project"
          className="aspect-[4/3] w-full cursor-zoom-in object-cover"
          loading="lazy"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative bg-zinc-50 p-1 dark:bg-zinc-950">
          <img
            src={src}
            alt="Project"
            className="max-h-[50vh] w-full object-contain md:max-h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit bg-white p-1 dark:bg-zinc-900"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] bg-zinc-50 px-2.5 py-1 text-sm font-medium text-[#6B76E5] transition-colors duration-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-[#6B76E5] dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Hero/Bio Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="py-8"
      >
        <p className="pl-4 text-zinc-600 dark:text-zinc-400">
          Designer that mostly dabbles in brand, web, and visuals for start-ups.
        </p>
      </motion.section>

      <SectionDivider />

      {/* Selected Projects Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 pl-4 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              className={`group ${index % 2 === 1 ? 'sm:-ml-[1px]' : ''} ${
                index >= 2 ? '-mt-[1px]' : ''
              }`}
            >
              <div className="relative border border-[#f0f0f0] transition-all duration-300 ease-out hover:opacity-80 dark:border-[#282828]">
                <ProjectImage src={project.image} />
              </div>
              <div className="p-4">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <SectionDivider />

      {/* Work Experience Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="w-full"
      >
        <h3 className="mb-5 pl-4 text-lg font-medium">Work Experience</h3>
        <div className="flex w-full flex-col">
          {WORK_EXPERIENCE.map((job, index) => (
            <a
              className={`relative w-full overflow-hidden bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30 ${
                index > 0 ? '-mt-[1px]' : ''
              }`}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <SectionDivider />

      {/* Blog Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 pl-4 text-lg font-medium">Blog</h3>
        <div className="mx-[1px] flex flex-col">
          <AnimatedBackground
            enableHover
            className="h-full w-full bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="px-4 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <SectionDivider />

      {/* Connect Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="py-8"
      >
        <h3 className="mb-5 pl-4 text-lg font-medium">Connect</h3>
        <p className="mb-5 pl-4 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3 pl-4">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
