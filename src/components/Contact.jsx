import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { contact } from '../config/content'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'text-accent'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/mohamed-diaa',
      href: contact.linkedin,
      color: 'text-accent-light'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@MohamedDiaaEldin',
      href: contact.github,
      color: 'text-text-secondary'
    }
  ]

  return (
    <section id="contact" ref={ref} className="section-padding bg-surface-elevated">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="mb-4">
            {contact.title}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          
          <p className="text-text-secondary text-body mb-10 max-w-2xl mx-auto">
            {contact.subtitle}
          </p>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-12"
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-surface border border-border-divider rounded-xl p-4 sm:p-6 hover:border-accent hover:shadow-glow transition-all group min-h-[180px] sm:min-h-[200px] flex flex-col items-center justify-center"
              >
                <method.icon
                  size={32}
                  className={`${method.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform sm:w-10 sm:h-10`}
                />
                <h3 className="text-text-primary font-heading font-semibold mb-2 text-center">
                  {method.label}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm break-all text-center px-2">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={`mailto:${contact.email}`}
              className="btn-primary btn-large inline-flex items-center gap-2"
            >
              <Send size={20} />
              {contact.cta}
            </a>
          </motion.div>

          {/* Availability */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text-secondary text-sm mt-8"
          >
            {contact.availability}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

