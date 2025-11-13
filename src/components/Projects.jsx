import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, TrendingUp } from 'lucide-react'
import { projects } from '../config/content'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-surface-elevated border border-border-divider rounded-xl overflow-hidden card-hover h-full flex flex-col"
    >
      {/* Category Badge */}
      <div className="p-4 sm:p-6 pb-0">
        <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
          {project.category}
        </span>
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-h3 text-text-primary mb-3">
          {project.title}
        </h3>

        <p className="text-text-secondary mb-4 flex-1">
          {project.description}
        </p>

        {/* Impact */}
        <div className="flex items-start gap-2 mb-6 bg-surface border border-accent/20 rounded-lg p-3">
          <TrendingUp size={20} className="text-accent mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">Impact: </span>
              {project.impact}
            </p>
          </div>
        </div>

        {/* Tech Stack - Always Visible */}
        <div className="flex flex-wrap gap-sm mb-4">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="bg-surface border border-border-divider px-3 py-1 rounded-lg text-sm text-text-secondary hover:border-accent hover:text-accent transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium min-h-[44px]"
          >
            View Project
            <ExternalLink size={20} />
          </motion.a>
        )}

        {!project.link && (
          <p className="text-text-secondary text-sm italic">
            Private/NDA Project
          </p>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="section-padding bg-surface-elevated">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary text-body max-w-2xl mx-auto">
            A selection of projects showcasing my experience in building scalable, 
            high-performance solutions across various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mb-12 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

