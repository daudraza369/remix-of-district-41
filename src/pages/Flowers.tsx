import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const Flowers = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-night-green to-slate-moss">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center px-6"
        >
          <h1 className="text-ivory mb-6 font-heading uppercase">Flowers</h1>
          <p className="text-stone text-xl md:text-2xl mb-8 max-w-xl mx-auto">
            Coming Soon
          </p>
          <p className="text-stone/70 text-lg">
            Our curated flower collection is on its way.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Flowers;
