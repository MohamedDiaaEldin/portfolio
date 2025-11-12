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
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-lg md:text-xl font-medium"
          >
            {hero.greeting}
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-hero-mobile xl:text-hero font-heading font-bold"
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
            className="text-slate-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-slate-light"
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-accent" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="hidden md:block text-slate">•</div>
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-accent" />
              <span>{personalInfo.workMode}</span>
            </div>
            <div className="hidden md:block text-slate">•</div>
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-accent" />
              <span>{personalInfo.availability}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button onClick={scrollToWork} className="btn-primary btn-large">
              {hero.cta.primary}
              <ChevronDown size={18} />
            </button>
            <button onClick={scrollToContact} className="btn-secondary btn-large">
              {hero.cta.secondary}
              <ArrowRight size={18} />
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

