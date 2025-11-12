import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { skills } from '../config/content'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState(skills.categories[0].id)

  const activeSkills = skills.categories.find(cat => cat.id === activeCategory)?.skills || []

  return (
    <section id="skills" ref={ref} className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {skills.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent text-white shadow-glow'
                  : 'bg-primary-light border border-slate text-slate-light hover:border-accent hover:text-accent'
              }`}
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
          <div className="bg-primary-light border border-slate rounded-2xl p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {activeSkills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-primary border border-slate px-4 py-2.5 rounded-lg text-sm text-white font-medium 
                             hover:border-accent hover:text-accent hover:shadow-glow 
                             transition-all duration-300 cursor-default"
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

