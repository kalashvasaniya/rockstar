'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      {/* Background Video (Hidden) */}
      <iframe 
        className="hidden" 
        width="560" 
        height="315"
        src="https://www.youtube.com/embed/yV2HyFC_gwo?autoplay=1&mute=1&si=u2KeHfwTe3vgwFmt"
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      />

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50"
          >
            {/* Desktop Loading */}
            <div className="hidden md:block">
              <div className="bg-black h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/img/RCKSTR.jpg"
                    alt="Rockstar"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* Mobile Loading */}
            <div className="block md:hidden">
              <div className="bg-black h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/img/grk.jpeg"
                    alt="Rockstar"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Desktop View */}
            <div className="hidden md:block">
              {/* Title */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 5, ease: [0.4, 0, 0.2, 1] }}
                className="flex justify-center top-8 z-10 relative"
              >
                <p className="text-base text-white">
                  <Link href="/imtiazali">
                    <span className="rock-3d-regular text-3xl hover:text-red-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                      Rockstar
                    </span>
                  </Link>
                </p>
              </motion.div>

              {/* Background Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 5, ease: [0.4, 0, 0.2, 1] }}
                className="fixed inset-0"
              >
                <Image
                  src="/img/rockstar.jpg"
                  alt="Rockstar"
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </motion.div>

              {/* Spotify Player */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 5, ease: [0.4, 0, 0.2, 1] }}
                className="relative top-48 -right-[10rem] z-20 max-w-[30rem]"
              >
                <iframe
                  className="w-full rounded-xl shadow-lg"
                  src="https://open.spotify.com/embed/album/3RZxrS2dDZlbsYtMRM89v8?utm_source=generator"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden">
              {/* Title */}
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 5, ease: [0.4, 0, 0.2, 1] }}
                className="flex justify-center top-8 z-10 relative"
              >
                <p className="text-base text-white">
                  <Link href="/imtiazali">
                    <span className="rock-3d-regular text-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
                      Rockstar
                    </span>
                  </Link>
                </p>
              </motion.div>

              {/* Spotify Player */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 5, ease: [0.4, 0, 0.2, 1] }}
                className="relative px-6 pt-20 z-10"
              >
                <iframe
                  className="w-full rounded-xl shadow-lg"
                  src="https://open.spotify.com/embed/album/3RZxrS2dDZlbsYtMRM89v8?utm_source=generator&theme=0"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </motion.div>

              {/* Background Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 5, ease: [0.4, 0, 0.2, 1] }}
                className="fixed inset-0"
              >
                <Image
                  src="/img/rockstar-m.jpeg"
                  alt="Rockstar"
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 