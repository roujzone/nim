'use client'

export function GridContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Left vertical line - extends to top of viewport */}
      <div className="pointer-events-none absolute -top-12 bottom-0 left-0 w-px bg-[#e5e5e5] md:-top-20 dark:bg-[#404040]" />
      {/* Right vertical line - extends to top of viewport */}
      <div className="pointer-events-none absolute -top-12 right-0 bottom-0 w-px bg-[#e5e5e5] md:-top-20 dark:bg-[#404040]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Adjust spacing here - controls gap between all sections
const SECTION_SPACING = 'my-16 md:my-24'

export function SectionDivider() {
  return (
    <div className={`relative ${SECTION_SPACING}`}>
      {/* Horizontal line */}
      <div className="h-px w-full bg-[#e5e5e5] dark:bg-[#404040]" />
      {/* Left square */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 bg-[#d4d4d4] dark:bg-[#525252]" />
      {/* Right square */}
      <div className="pointer-events-none absolute top-1/2 right-0 h-[6px] w-[6px] -translate-y-1/2 translate-x-1/2 bg-[#d4d4d4] dark:bg-[#525252]" />
    </div>
  )
}
