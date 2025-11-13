import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { footer } from '../config/content'

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border-divider py-12">
      <div className="container-custom px-6 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-sm flex items-center gap-2"
          >
            {footer.copyright.replace(' ❤️', '')}
            <Heart size={16} className="text-accent fill-accent" />
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-lg"
          >
            {footer.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-text-secondary hover:text-accent transition-colors text-sm min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-accent hover:text-accent-light transition-colors text-sm font-medium min-h-[44px]"
            aria-label="Scroll to top"
          >
            ↑ Back to Top
          </button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


