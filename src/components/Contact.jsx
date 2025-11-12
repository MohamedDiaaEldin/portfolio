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
      color: 'text-slate-light'
    }
  ]

  return (
    <section id="contact" ref={ref} className="section-padding bg-primary-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {contact.title}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          
          <p className="text-slate-light text-base mb-10 leading-relaxed max-w-2xl mx-auto">
            {contact.subtitle}
          </p>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-primary border border-slate rounded-xl p-6 hover:border-accent hover:shadow-glow transition-all group"
              >
                <method.icon
                  size={40}
                  className={`${method.color} mb-4 mx-auto group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-white font-heading font-semibold mb-2">
                  {method.label}
                </h3>
                <p className="text-slate-light text-sm break-all">
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
              <Send size={18} />
              {contact.cta}
            </a>
          </motion.div>

          {/* Availability */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-slate-light text-sm mt-8"
          >
            {contact.availability}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

