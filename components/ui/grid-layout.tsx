'use client'

export function GridContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Left vertical line - extends to top of viewport */}
      <div className="pointer-events-none absolute left-0 -top-12 md:-top-20 bottom-0 w-px bg-[#e5e5e5] dark:bg-[#404040]" />
      {/* Right vertical line - extends to top of viewport */}
      <div className="pointer-events-none absolute right-0 -top-12 md:-top-20 bottom-0 w-px bg-[#e5e5e5] dark:bg-[#404040]" />

      {/* Dither background for hero section - extends to first section divider */}
      <div
        className="absolute left-0 right-0 -top-12 md:-top-20 h-[350px] md:h-[400px] overflow-hidden pointer-events-none opacity-60"
        style={{ zIndex: 0 }}
      >
        <img
          src="/Dithering@2x.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
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
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[6px] w-[6px] bg-[#d4d4d4] dark:bg-[#525252]" />
      {/* Right square */}
      <div className="pointer-events-none absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-[6px] w-[6px] bg-[#d4d4d4] dark:bg-[#525252]" />
    </div>
  )
}
