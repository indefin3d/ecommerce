import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-[linear-gradient(135deg,#58a6ff_0%,#3377ff_45%,#1d5dff_100%)] text-white shadow-[0_20px_50px_rgba(36,107,255,0.35)] hover:shadow-[0_24px_60px_rgba(36,107,255,0.45)]',
  secondary:
    'border border-white/14 bg-white/6 text-slate-100 backdrop-blur-xl hover:border-sky-300/30 hover:bg-white/10',
  ghost: 'text-slate-300 hover:text-white',
}

export function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
