import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, image }: SectionProps & { image?: string }) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col lg:flex-row items-center justify-center lg:justify-start p-6 md:p-12 lg:p-24 gap-6 lg:gap-0">
      <div className={`flex flex-col justify-center ${image ? 'w-full lg:w-1/2' : 'w-full'}`}>
        {subtitle && (
          <motion.div
            className="mb-6 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold leading-[1.1] tracking-tight max-w-2xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {content && (
          <motion.p
            className="text-base md:text-xl max-w-xl mt-4 lg:mt-6 text-neutral-400"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 lg:mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-amber-400 bg-transparent border-amber-400 hover:bg-amber-400 hover:text-black transition-colors"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>

      {image && (
        <motion.div
          className="flex w-full lg:w-1/2 justify-center lg:justify-end items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative w-full max-w-[280px] h-[200px] md:max-w-[360px] md:h-[280px] lg:w-[420px] lg:h-[420px] lg:max-w-none rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      )}
    </section>
  )
}
