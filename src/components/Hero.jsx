import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, MapPin, Globe, Briefcase } from 'lucide-react'
import { hero, personalInfo } from '../config/content'

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center justify-center section-padding pt-24 md:pt-28 lg:pt-32">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:space-y-8 lg:space-y-10"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-body md:text-body-lg lg:text-body-xl font-medium mb-2"
          >
            {hero.greeting}
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="break-words"
          >
            <span className="text-gradient bg-gradient-to-r from-white via-accent-light to-accent bg-[length:200%_auto] animate-gradient">
              {hero.headline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-body md:text-body-lg max-w-2xl mx-auto"
          >
            {hero.subheadline}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-md md:gap-lg pt-6 text-text-secondary"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent md:w-5 md:h-5" />
              <span className="text-sm md:text-body">{personalInfo.location}</span>
            </div>
            <div className="hidden md:flex items-center text-border-divider">•</div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-accent md:w-5 md:h-5" />
              <span className="text-sm md:text-body">{personalInfo.workMode}</span>
            </div>
            <div className="hidden md:flex items-center text-border-divider">•</div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-accent md:w-5 md:h-5" />
              <span className="text-sm md:text-body">{personalInfo.availability}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-md pt-10"
          >
            <button onClick={scrollToWork} className="btn-primary btn-large" aria-label="View my projects">
              {hero.cta.primary}
              <ChevronDown size={20} />
            </button>
            <button onClick={scrollToContact} className="btn-secondary btn-large" aria-label="Get in touch">
              {hero.cta.secondary}
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Animation Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

