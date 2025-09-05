import './App.css'
import React, { useEffect, useState } from 'react';
import { ExternalLink, Users, BookOpen, Dumbbell, Calendar, Truck, Phone, Mail, Instagram, Globe, QrCode } from 'lucide-react';

const FirefighterLanding = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Spannende Einsätze",
      subtitle: "& moderne Technik",
      url: "#",
      color: "from-red-50 to-red-100 hover:from-red-100 hover:to-red-200"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Starke Gemeinschaft",
      subtitle: "& Teamgeist",
      url: "#",
      color: "from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Ausbildung",
      subtitle: "& Weiterbildung",
      url: "#",
      color: "from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200"
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Fit bleiben",
      subtitle: "& neue Skills lernen",
      url: "#",
      color: "from-green-50 to-green-100 hover:from-green-100 hover:to-green-200"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Events",
      subtitle: "& Kameradschaft",
      url: "#",
      color: "from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      url: "https://instagram.com/feuerwehr_ulm_lehr"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      url: "https://feuerwehr-lehr.de"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "E-Mail",
      url: "mailto:info@fw-lehr.de"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Kontakt",
      url: "tel:+491781332770"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* RAL 3000 Feuerrot Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br"
        style={{
          background: `linear-gradient(135deg, 
            #A72920 0%,     /* RAL 3000 Feuerrot */
            #8B1E1A 25%,    /* Dunkleres Feuerrot */
            #6B1514 50%,    /* Sehr dunkles Feuerrot */
            #A72920 75%,    /* RAL 3000 wieder */
            #D4374A 100%    /* Heller Feuerrot-Akzent */
          )`
        }}
      />

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 h-32 top-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform skew-y-12 h-24 top-96"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent transform -skew-y-6 h-16 bottom-32"></div>
      </div>

      {/* Firefighter Background Image Container - Ready for PNG */}
      <div 
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0001})`
        }}
      >
        {/* PNG Background Image will be placed here */}
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/assets/firefighters.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-20 min-h-screen">
        
        {/* Header Section */}
        <header 
          className="text-center py-12 md:py-20 px-4"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        >
          {/* Feuerwehr Badge */}
          <div className="mb-8">
            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-6 text-white drop-shadow-lg">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFA500" />
                    <stop offset="100%" stopColor="#FF8C00" />
                  </linearGradient>
                </defs>
                <path 
                  d="M50 5 L35 20 L50 35 L65 20 Z M20 30 L35 45 L20 60 L5 45 Z M80 30 L95 45 L80 60 L65 45 Z M50 65 L35 80 L50 95 L65 80 Z" 
                  fill="url(#badgeGradient)"
                  className="drop-shadow-md"
                />
                <circle cx="50" cy="50" r="18" fill="#A72920" className="drop-shadow-sm" />
                <circle cx="50" cy="50" r="12" fill="#FFD700" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
              Du willst zu{' '}
              <span 
                className="inline-block transform hover:scale-105 transition-transform duration-300"
                style={{ color: '#FFD700', textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
              >
                uns
              </span>
              ?!
            </h1>
            
            <div className="text-white/95 text-lg md:text-2xl font-medium drop-shadow-lg">
              <p className="font-bold text-2xl md:text-3xl mb-3 tracking-wide">Gemeinsam stark</p>
              <p className="max-w-2xl mx-auto">
                Sei dabei: <span style={{ color: '#FFD700' }} className="font-semibold">Jetzt informieren & mitmachen!</span>
              </p>
            </div>
          </div>
        </header>

        {/* Social Media Links */}
        <section 
          className="max-w-lg mx-auto px-4 pb-12"
          style={{
            transform: `translateY(${scrollY * 0.01}px)`
          }}
        >
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                }}
              >
                <div 
                  className="mr-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: '#FFD700' }}
                >
                  {social.icon}
                </div>
                <span className="text-white font-semibold">{social.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer 
          className="text-center py-12 px-4"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        >
          <div className="text-white drop-shadow-lg">
            <h2 className="text-3xl md:text-5xl font-black mb-2 tracking-wide">
              Feuerwehr Ulm
            </h2>
            <h3 
              className="text-xl md:text-3xl font-bold mb-6"
              style={{ color: '#FFD700', textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' }}
            >
              Abteilung Lehr
            </h3>
            <p className="text-lg font-medium opacity-90 max-w-md mx-auto leading-relaxed">
              Bereit wenn's drauf ankommt
            </p>
            <div className="mt-6 text-sm opacity-75">
              <p>© 2025 Feuerwehr Ulm - Abteilung Lehr</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="tel:+4973150000"
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
          style={{
            background: 'linear-gradient(135deg, #A72920 0%, #8B1E1A 100%)'
          }}
        >
          <Phone className="w-6 h-6 text-white group-hover:animate-pulse" />
        </a>
      </div>

      {/* Animated particles for atmosphere */}
      <div 
        className="fixed inset-0 pointer-events-none z-5"
        style={{
          transform: `translateY(${scrollY * 0.7}px)`
        }}
      >
        <div className="absolute top-20 left-1/4 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#FFD700', opacity: 0.6 }}></div>
        <div className="absolute top-40 right-1/3 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#FFD700', opacity: 0.4, animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/5 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#FFD700', opacity: 0.5, animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full" style={{ backgroundColor: '#A72920', opacity: 0.3 }}></div>
      </div>
    </div>
  );
};

export default FirefighterLanding;