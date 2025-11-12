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
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate"></div>
      
      {/* Timeline Dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent border-4 border-primary transform -translate-x-[7px]"
      ></motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.01, y: -2 }}
        className="bg-primary-light border border-slate rounded-xl p-6 md:p-8 card-hover"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              {experience.company}
            </h3>
            <p className="text-accent text-lg font-medium mb-2">
              {experience.role}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-light">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {experience.duration}
              </span>
              <span>•</span>
              <span>{experience.durationShort}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={16} />
                {experience.location}
              </span>
              <span>•</span>
              <span>{experience.workMode}</span>
            </div>
          </div>
          {experience.current && (
            <span className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
              Current
            </span>
          )}
        </div>

        {/* Expandable Content */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors mb-4"
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
                  <h4 className="font-semibold text-white mb-1">{position.title}</h4>
                  <p className="text-sm text-slate-light mb-3">{position.period}</p>
                  <ul className="space-y-2">
                    {position.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-light flex gap-2">
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
                  <li key={i} className="text-slate-light flex gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              {experience.accomplishments && experience.accomplishments.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate">
                  <h5 className="text-white font-semibold mb-2">Accomplishments:</h5>
                  <ul className="space-y-2">
                    {experience.accomplishments.map((accomplishment, i) => (
                      <li key={i} className="text-slate-light flex gap-2">
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
          <div className="flex flex-wrap gap-2 mt-6">
            {experience.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-primary border border-slate px-3 py-1 rounded-lg text-sm text-slate-light hover:border-accent hover:text-accent transition-colors"
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
    <section id="experience" ref={ref} className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
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

