import './App.css'
import React, { useEffect, useState } from 'react';
import { ExternalLink, Users, BookOpen, Dumbbell, Calendar, Truck, Phone, Mail, Instagram, Globe, MessageCircleReply } from 'lucide-react';

const FirefighterLanding = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

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


      {/* Firefighter Background Image Container - Ready for PNG */}
      <div 
        className="fixed inset-0 z-20 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0020})`
        }}
      >
        {/* PNG Background Image will be placed here */}
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-25"
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
          <div >
            <div>
              <img src="/assets/gemeinsames_logo.png" alt="Florian" className="h-45 mb-5 mx-auto" />
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
          className="max-w-lg mx-auto px-4 pb-10"
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
          className="text-center px-4"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        >
          <div className="text-white drop-shadow-lg z-10">
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
              Bereit wenn's drauf ankommt - du auch?
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
          href="https://wa.me/491781332770"
          target='_blank'
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
          style={{
            background: '#25D366',
            border: '2px solid white'
          }}
        >
          {/* <Phone className="w-6 h-6 text-white group-hover:animate-pulse" /> */}
          <MessageCircleReply className="w-6 h-6 text-white group-hover:animate-pulse" />
        </a>
      </div>


    </div>
  );
};

export default FirefighterLanding;