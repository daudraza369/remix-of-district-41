import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Modern Corporate Lobby',
    description: 'Custom planters, preserved wall, and focal tree installation.',
    category: 'Office',
  },
  {
    title: 'Luxury Hotel Atrium',
    description: 'Full-scale artificial palm grove with integrated lighting.',
    category: 'Hospitality',
  },
  {
    title: 'Fine Dining Restaurant',
    description: 'Living green wall with preserved moss accents.',
    category: 'F&B',
  },
  {
    title: 'Private Villa Garden',
    description: 'Custom olive trees and Mediterranean plantscaping.',
    category: 'Residential',
  },
  {
    title: 'Shopping Mall Entrance',
    description: 'Statement ficus installation with seasonal rotation.',
    category: 'Retail',
  },
  {
    title: 'Co-Working Space',
    description: 'Biophilic design with desk planters and partition walls.',
    category: 'Office',
  },
];

export function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-pear/30">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-night-green mb-4">Spaces Transformed Through Green Design</h2>
          <p className="text-body-large text-slate-moss max-w-2xl mx-auto">
            A showcase of curated interiors and custom installations.
          </p>
        </motion.div>

        {/* Portfolio Grid - Masonry-like */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={index === 0 || index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Link
                to="/projects"
                className="group block relative rounded-sm overflow-hidden bg-stone/30"
              >
                <div className={`aspect-[4/3] ${index === 0 ? 'lg:aspect-[4/3]' : ''}`}>
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-night-green/10 to-slate-moss/20">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-night-green/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-night-green/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-night-green/40 text-xs uppercase tracking-wider">[Image Placeholder]</p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night-green via-night-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <span className="text-pear text-xs uppercase tracking-wider mb-2">{project.category}</span>
                    <h4 className="text-ivory mb-2">{project.title}</h4>
                    <p className="text-stone/90 text-sm mb-4">{project.description}</p>
                    <span className="text-ivory flex items-center gap-2 text-sm font-semibold">
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
