import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/district-logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Plantscaping (Office & F&B)', href: '/services/plantscaping' },
      { label: 'Tree Customization & Restoration', href: '/services/tree-customization' },
      { label: 'Green Walls', href: '/services/green-walls' },
      { label: 'Custom Planters', href: '/services/planters' },
      { label: 'Maintenance', href: '/services/maintenance' },
    ],
  },
  { label: 'Collection', href: '/collection' },
  { label: 'Tree Solutions', href: '/tree-solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-luxury px-6 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img
              src={logo}
              alt="District Interiors"
              className={cn(
                'h-12 md:h-14 w-auto transition-all duration-300',
                isScrolled ? 'brightness-100' : 'brightness-0 invert'
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center gap-1 text-sm uppercase tracking-wider font-semibold transition-colors duration-300',
                    isScrolled
                      ? 'text-night-green hover:text-slate-moss'
                      : 'text-ivory hover:text-stone'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-ivory rounded-sm shadow-xl py-3 min-w-[280px] border border-stone/30">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-5 py-3 text-sm text-night-green hover:bg-pear/30 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Button
              variant={isScrolled ? 'default' : 'hero'}
              size="sm"
              onClick={scrollToContact}
            >
              Request a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn('w-6 h-6', 'text-night-green')} />
            ) : (
              <Menu
                className={cn(
                  'w-6 h-6',
                  isScrolled ? 'text-night-green' : 'text-ivory'
                )}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-ivory z-40 lg:hidden transition-all duration-500',
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
            {navItems.map((item, index) => (
              <div key={item.label} className="text-center">
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-heading text-night-green hover:text-slate-moss transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-3 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm text-slate-moss hover:text-night-green transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              variant="default"
              size="lg"
              onClick={scrollToContact}
              className="mt-6"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
