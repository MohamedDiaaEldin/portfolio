import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download } from 'lucide-react'
import { about, personalInfo } from '../config/content'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" ref={ref} className="section-padding bg-surface-elevated">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="mb-4">
              {about.title}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-5">
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-text-secondary text-body md:text-body-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-md mt-10"
          >
            {about.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-surface border border-border-divider rounded-xl p-6 text-center card-hover"
              >
                <div className="text-4xl mb-3">{highlight.icon}</div>
                <h3 className="text-h3 mb-2 text-text-primary">
                  {highlight.title}
                </h3>
                <p className="text-text-secondary text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-primary btn-large inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download Full Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

