'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

// Fade In animations
export const FadeIn = ({ children, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    {...props}
  >
    {children}
  </motion.div>
)

// Fade In Up
export const FadeInUp = ({ children, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
)

// Fade In Down
export const FadeInDown = ({ children, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
)

// Fade In Left
export const FadeInLeft = ({ children, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
)

// Fade In Right
export const FadeInRight = ({ children, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
)

// Scale In
export const ScaleIn = ({ children, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
)

// Stagger Children
export const StaggerContainer = ({ children, staggerDelay = 0.1, ...props }: HTMLMotionProps<"div"> & { staggerDelay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, ...props }: HTMLMotionProps<"div">) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
    {...props}
  >
    {children}
  </motion.div>
)

// Hover animations
export const HoverScale = ({ children, scale = 1.05, ...props }: HTMLMotionProps<"div"> & { scale?: number }) => (
  <motion.div
    whileHover={{ scale }}
    whileTap={{ scale: scale * 0.95 }}
    transition={{ duration: 0.2 }}
    {...props}
  >
    {children}
  </motion.div>
)

export const HoverLift = ({ children, ...props }: HTMLMotionProps<"div">) => (
  <motion.div
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    {...props}
  >
    {children}
  </motion.div>
)

// Rotate In
export const RotateIn = ({ children, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -10 }}
    whileInView={{ opacity: 1, rotate: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    {...props}
  >
    {children}
  </motion.div>
)

// Blur In
export const BlurIn = ({ children, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    {...props}
  >
    {children}
  </motion.div>
)

// Slide In animations
export const SlideInFromBottom = ({ children, delay = 0, distance = 100, ...props }: HTMLMotionProps<"div"> & { delay?: number; distance?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
)

// Parallax effect
export const ParallaxContainer = ({ children, speed = 0.5, ...props }: HTMLMotionProps<"div"> & { speed?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    whileInView={{ y: speed * -50 }}
    viewport={{ once: false }}
    transition={{ duration: 0 }}
    {...props}
  >
    {children}
  </motion.div>
)

// Number counter animation
export const CountUp = ({ end, duration = 2, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ textContent: '0' }}
        whileInView={{ textContent: end }}
        viewport={{ once: true }}
        transition={{ duration, ease: "easeOut" }}
        onUpdate={(latest: any) => {
          const value = Math.floor(latest.textContent)
          return `${prefix}${value}${suffix}`
        }}
      />
      {suffix}
    </motion.span>
  )
}

