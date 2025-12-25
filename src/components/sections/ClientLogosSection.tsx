import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import local logo assets
import amazonLogo from '@/assets/logos/amazon.png';
import linklatersLogo from '@/assets/logos/linklaters.png';
import pepsicoLogo from '@/assets/logos/pepsico.png';
import tahakomLogo from '@/assets/logos/tahakom.svg';
import simahLogo from '@/assets/logos/simah.png';

interface ClientLogo {
  id: string;
  client_name: string;
  logo_url: string;
  website_url: string | null;
}

// Static client logos data
const clientLogos: ClientLogo[] = [
  {
    id: '1',
    client_name: 'Amazon',
    logo_url: amazonLogo,
    website_url: 'https://amazon.com',
  },
  {
    id: '2',
    client_name: 'Tharawat',
    logo_url: '', // Placeholder - needs logo file
    website_url: 'https://tharawat.org',
  },
  {
    id: '3',
    client_name: 'Bain & Company',
    logo_url: '', // Placeholder - needs logo file
    website_url: 'https://bain.com',
  },
  {
    id: '4',
    client_name: 'AviLease',
    logo_url: '', // Placeholder - needs logo file
    website_url: 'https://avilease.com',
  },
  {
    id: '5',
    client_name: 'Linklaters',
    logo_url: linklatersLogo,
    website_url: 'https://linklaters.com',
  },
  {
    id: '6',
    client_name: 'Tahakom',
    logo_url: tahakomLogo,
    website_url: 'https://tahakom.com',
  },
  {
    id: '7',
    client_name: 'Abunayyan Holding',
    logo_url: '', // Placeholder - needs logo file
    website_url: 'https://abunayyanholding.com',
  },
  {
    id: '8',
    client_name: 'SIMAH',
    logo_url: simahLogo,
    website_url: 'https://simah.com',
  },
  {
    id: '9',
    client_name: 'PepsiCo',
    logo_url: pepsicoLogo,
    website_url: 'https://pepsico.com',
  },
];

export function ClientLogosSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  // Quadruple for seamless loop
  const repeatedClients = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  const LogoItem = ({ client }: { client: ClientLogo }) => (
    <div className="flex-shrink-0 mx-10 md:mx-14 lg:mx-20 flex items-center justify-center group">
      <div className="w-32 md:w-40 h-16 flex items-center justify-center">
        {client.logo_url ? (
          client.website_url ? (
            <a 
              href={client.website_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
            >
              <img
                src={client.logo_url}
                alt={client.client_name}
                className="max-w-full max-h-10 md:max-h-12 object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </a>
          ) : (
            <img
              src={client.logo_url}
              alt={client.client_name}
              className="max-w-full max-h-10 md:max-h-12 object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
          )
        ) : (
          // Text fallback for missing logos
          <a 
            href={client.website_url || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full"
          >
            <span className="text-sm md:text-base font-nav uppercase tracking-wider text-slate-moss/40 group-hover:text-night-green transition-colors duration-500 whitespace-nowrap">
              {client.client_name}
            </span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section 
      ref={ref} 
      className="relative py-16 md:py-20 overflow-hidden bg-ivory"
    >
      {/* Subtle decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone to-transparent" />

      <div className="container-luxury px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header - matching the cinematic style */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          animate={isVisible ? { opacity: 1, y: 0, filter: 'blur(0)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-slate-moss/60 font-nav mb-3">
            Trusted By
          </p>
          <h3 className="text-night-green text-2xl md:text-3xl font-heading uppercase tracking-wide">
            Industry Leaders
          </h3>
        </motion.div>
      </div>

      {/* Logo Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Edge fades - using ivory to match section background */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, hsl(60 30% 98%) 0%, transparent 100%)' }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, hsl(60 30% 98%) 0%, transparent 100%)' }}
        />

        {/* Scrolling container */}
        <div 
          className="flex items-center py-6 hover:[animation-play-state:paused]"
          style={{
            animation: 'logo-scroll 35s linear infinite',
            width: 'fit-content'
          }}
        >
          {repeatedClients.map((client, index) => (
            <LogoItem key={`${client.id}-${index}`} client={client} />
          ))}
        </div>
      </motion.div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}
