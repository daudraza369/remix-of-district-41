import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ClientLogo {
  id: string;
  client_name: string;
  logo_url: string;
  website_url: string | null;
  display_order: number;
}

export function ClientLogosSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [clients, setClients] = useState<ClientLogo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      const { data, error } = await supabase
        .from('client_logos')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });

      if (!error && data) {
        setClients(data);
      }
      setLoading(false);
    }

    fetchClients();
  }, []);

  // Quadruple for seamless loop
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

  // Don't render section if no clients
  if (!loading && clients.length === 0) {
    return null;
  }

  const LogoItem = ({ client }: { client: ClientLogo }) => (
    <div className="flex-shrink-0 mx-10 md:mx-14 lg:mx-20 flex items-center justify-center group">
      <div className="w-32 md:w-40 h-16 flex items-center justify-center">
        {client.website_url ? (
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
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="text-slate-moss/30 text-sm font-nav uppercase tracking-widest">Loading...</div>
          </div>
        ) : (
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
        )}
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