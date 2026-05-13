import { motion } from 'framer-motion'

export function SectionTitle({ title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={alignment}
    >
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  )
}
