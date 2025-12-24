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
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
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

  // Quadruple for ultra-smooth seamless loop
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

  // Don't render section if no clients
  if (!loading && clients.length === 0) {
    return null;
  }

  const LogoItem = ({ client }: { client: ClientLogo }) => (
    <div className="flex-shrink-0 mx-10 md:mx-14 lg:mx-20 flex items-center justify-center group">
      <div className="w-32 md:w-40 h-20 flex items-center justify-center transition-all duration-500 ease-out">
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
              className="max-w-full max-h-12 md:max-h-14 object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105"
            />
          </a>
        ) : (
          <img
            src={client.logo_url}
            alt={client.client_name}
            className="max-w-full max-h-12 md:max-h-14 object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105"
          />
        )}
      </div>
    </div>
  );

  return (
    <section 
      ref={ref} 
      className="relative py-14 md:py-16 overflow-hidden bg-stone"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-moss/20 to-transparent" />

      <div className="container-luxury px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-slate-moss mb-3">Trusted Partners</p>
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-night-green/20" />
            <h3 className="text-night-green text-xl md:text-2xl font-heading tracking-wide">Leading Brands Choose District</h3>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-night-green/20" />
          </div>
        </motion.div>
      </div>

      {/* Logo Marquee with ivory background strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative"
      >
        {/* Slider track background - ivory strip with subtle shadow */}
        <div 
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, hsl(60 30% 98% / 0.7) 0%, hsl(60 30% 98%) 20%, hsl(60 30% 98%) 80%, hsl(60 30% 98% / 0.7) 100%)',
            boxShadow: 'inset 0 1px 2px hsl(60 3% 70% / 0.3), inset 0 -1px 2px hsl(60 3% 70% / 0.3)'
          }}
        />

        {/* Smooth gradient masks matching stone background */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 z-10 pointer-events-none"
          style={{ 
            background: 'linear-gradient(to right, hsl(60 3% 78%) 0%, hsl(60 3% 78% / 0.9) 30%, hsl(60 3% 78% / 0.5) 60%, transparent 100%)'
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 z-10 pointer-events-none"
          style={{ 
            background: 'linear-gradient(to left, hsl(60 3% 78%) 0%, hsl(60 3% 78% / 0.9) 30%, hsl(60 3% 78% / 0.5) 60%, transparent 100%)'
          }}
        />

        {/* Scrolling container */}
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="text-slate-moss/50 text-sm">Loading partners...</div>
          </div>
        ) : (
          <div 
            className="flex items-center py-6 hover:[animation-play-state:paused] relative z-[1]"
            style={{
              animation: 'logo-scroll 25s linear infinite',
              width: 'fit-content'
            }}
          >
            {repeatedClients.map((client, index) => (
              <LogoItem key={`${client.id}-${index}`} client={client} />
            ))}
          </div>
        )}
      </motion.div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-moss/20 to-transparent" />

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
