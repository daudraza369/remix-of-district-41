import { Link } from 'react-router-dom';
import logo from '@/assets/district-logo.png';

export function Footer() {
  return (
    <footer className="bg-night-green py-16 px-6 md:px-12 lg:px-20">
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="District Interiors" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-stone/80 max-w-md leading-relaxed">
              Transforming spaces through expert plantscaping, luxury softscaping, and custom tree fabrication. We merge natural aesthetics with architectural precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ivory mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'Collection', 'Projects', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-stone/80 hover:text-pear transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-ivory mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Plantscaping',
                'Tree Customization',
                'Green Walls',
                'Custom Planters',
                'Maintenance',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-stone/80 hover:text-pear transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone/60 text-sm">
            © {new Date().getFullYear()} District Interiors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-stone/60 hover:text-pear text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-stone/60 hover:text-pear text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
