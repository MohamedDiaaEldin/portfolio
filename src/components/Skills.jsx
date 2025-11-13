import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { skills } from '../config/content'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("backend")

  const activeSkills = skills.categories.find(cat => cat.id === activeCategory)?.skills || []

  return (
    <section id="skills" ref={ref} className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-md mb-10"
        >
          {skills.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 min-h-[44px] ${
                activeCategory === category.id
                  ? 'bg-accent text-white shadow-glow'
                  : 'bg-surface-elevated border border-border-divider text-text-secondary hover:border-accent hover:text-accent'
              }`}
              aria-pressed={activeCategory === category.id}
              aria-label={`Show ${category.name} skills`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Display - Clean Badge Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-surface-elevated border border-border-divider rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-sm md:gap-md justify-center"
            >
              {activeSkills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-surface border border-border-divider px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm text-text-primary font-medium 
                             hover:border-accent hover:text-accent hover:shadow-glow 
                             transition-all duration-300 cursor-default break-words"
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

