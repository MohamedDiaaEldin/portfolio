import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import { experiences } from '../config/content'

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0) // First item expanded by default
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-2 md:left-0 top-0 bottom-0 w-0.5 bg-border-divider"></div>
      
      {/* Timeline Dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-2 md:left-0 top-2 w-4 h-4 rounded-full bg-accent border-4 border-surface transform -translate-x-[7px] z-10"
      ></motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.01, y: -2 }}
        className="bg-surface-elevated border border-border-divider rounded-xl p-4 sm:p-6 md:p-8 card-hover ml-0 md:ml-0"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-md mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-h3 text-text-primary mb-2 break-words">
              {experience.company}
            </h3>
            <p className="text-accent text-body-lg font-medium mb-2 break-words">
              {experience.role}
            </p>
            <div className="flex flex-wrap gap-2 md:gap-md text-xs sm:text-sm text-text-secondary">
              <span className="flex items-center gap-1 whitespace-nowrap">
                <Calendar size={14} className="flex-shrink-0" />
                <span className="truncate">{experience.duration}</span>
              </span>
              <span className="hidden sm:inline text-border-divider">•</span>
              <span className="whitespace-nowrap">{experience.durationShort}</span>
              <span className="hidden sm:inline text-border-divider">•</span>
              <span className="flex items-center gap-1 whitespace-nowrap">
                <MapPin size={14} className="flex-shrink-0" />
                <span className="truncate">{experience.location}</span>
              </span>
              <span className="hidden sm:inline text-border-divider">•</span>
              <span className="whitespace-nowrap">{experience.workMode}</span>
            </div>
          </div>
          {experience.current && (
            <span className="bg-accent/20 text-accent px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0 mt-2 md:mt-0">
              Current
            </span>
          )}
        </div>

        {/* Expandable Content */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors mb-4 min-h-[44px]"
          aria-expanded={isExpanded}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          <span className="font-medium">{isExpanded ? 'Show Less' : 'Show Details'}</span>
        </motion.button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {/* Multiple Positions (if applicable) */}
          {experience.positions ? (
            <div className="space-y-6">
              {experience.positions.map((position, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-text-primary mb-1">{position.title}</h4>
                  <p className="text-sm text-text-secondary mb-3">{position.period}</p>
                  <ul className="space-y-2">
                    {position.achievements.map((achievement, i) => (
                      <li key={i} className="text-text-secondary flex gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 mb-6">
              <ul className="space-y-3">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="text-text-secondary flex gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              {experience.accomplishments && experience.accomplishments.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border-divider">
                  <h5 className="text-text-primary font-semibold mb-2">Accomplishments:</h5>
                  <ul className="space-y-2">
                    {experience.accomplishments.map((accomplishment, i) => (
                      <li key={i} className="text-text-secondary flex gap-2">
                        <span className="text-accent mt-1.5">◦</span>
                        <span>{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-sm mt-6">
            {experience.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-surface border border-border-divider px-3 py-1 rounded-lg text-sm text-text-secondary hover:border-accent hover:text-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

