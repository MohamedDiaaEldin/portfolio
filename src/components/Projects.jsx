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
      className="bg-primary-light border border-slate rounded-xl overflow-hidden card-hover h-full flex flex-col"
    >
      {/* Category Badge */}
      <div className="p-6 pb-0">
        <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-heading font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-slate-light mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Impact */}
        <div className="flex items-start gap-2 mb-6 bg-primary border border-accent/20 rounded-lg p-3">
          <TrendingUp size={20} className="text-accent mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-slate-light">
              <span className="font-semibold text-white">Impact: </span>
              {project.impact}
            </p>
          </div>
        </div>

        {/* Tech Stack - Always Visible */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="bg-primary border border-slate px-3 py-1 rounded-lg text-sm text-slate-light hover:border-accent hover:text-accent transition-colors"
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
            className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium"
          >
            View Project
            <ExternalLink size={18} />
          </motion.a>
        )}

        {!project.link && (
          <p className="text-slate-light text-sm italic">
            Private/NDA Project
          </p>
        )}
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-accent text-primary px-4 py-1 rounded-bl-lg rounded-tr-2xl text-xs font-bold">
            FEATURED
          </div>
        </div>
      )}
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured)

  return (
    <section id="projects" ref={ref} className="section-padding bg-primary-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-slate-light text-base max-w-2xl mx-auto">
            A selection of projects showcasing my experience in building scalable, 
            high-performance solutions across various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > projects.filter(p => p.featured).length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects

