import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Leaf, Palette, Recycle, Award, Building2 } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Dual Expertise',
    description: 'Specialists in both natural and artificial greenery.',
  },
  {
    icon: Palette,
    title: 'Customization',
    description: 'Trees, planters, and layouts tailored to every project.',
  },
  {
    icon: Recycle,
    title: 'Sustainability',
    description: 'Eco-focused solutions and long-term maintenance.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Realistic greenery and reliable upkeep.',
  },
  {
    icon: Building2,
    title: 'Luxury Reach',
    description: 'Serving villas, hotels, and premium corporate projects.',
  },
];

export function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-ivory">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-night-green mb-4">Why Clients Choose District Interiors</h2>
          <p className="text-body-large text-slate-moss max-w-2xl mx-auto">
            Trusted by leading companies for our flexibility, fast turnaround, and dependable delivery in office environments.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-ivory border border-stone/30 rounded-sm p-6 hover:bg-pear/20 hover:border-pear hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-night-green/10 flex items-center justify-center mb-5 group-hover:bg-night-green/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-night-green" />
              </div>
              <h4 className="text-night-green mb-2">{feature.title}</h4>
              <p className="text-slate-moss text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
