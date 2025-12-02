import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: 'Trees with Prices',
    description: 'Curated artificial and natural trees sized for villas, offices, and commercial spaces.',
    image: null,
  },
  {
    title: 'Flowers',
    description: 'Floral arrangements and stems that add refined color and softness.',
    image: null,
  },
  {
    title: 'Leaves/Foliage',
    description: 'Dense, realistic foliage to build volume and texture into your designs.',
    image: null,
  },
  {
    title: 'Green Walls',
    description: 'Vertical installations that bring nature into every corner.',
    image: null,
  },
  {
    title: 'Trunks and Branches',
    description: 'Custom trunks and branch structures for unique sculptural statements.',
    image: null,
  },
  {
    title: 'Planters',
    description: 'GRC, acrylic, and stone planters tailored to your space.',
    image: null,
  },
];

export function CollectionPreviewSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-pear">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-night-green mb-4">Explore Our Collection</h2>
          <p className="text-body-large text-slate-moss max-w-2xl mx-auto">
            Premium greenery solutions for every environment.
          </p>
        </motion.div>

        {/* Collection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                to="/collection"
                className="group block bg-ivory rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Placeholder */}
                <div className="aspect-square relative overflow-hidden bg-stone/30">
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
                  <div className="absolute inset-0 bg-night-green/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <span className="text-ivory flex items-center gap-2 text-sm uppercase tracking-wider font-semibold">
                      View Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-night-green mb-2 group-hover:text-slate-moss transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-moss text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
