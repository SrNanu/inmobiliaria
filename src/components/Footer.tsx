import React from 'react';
import { motion } from 'framer-motion';
import { Home, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    propiedades: [
      'Departamentos',
      'Casas',
      'Oficinas',
      'Locales Comerciales',
      'Terrenos',
      'Propiedades Premium',
    ],
    servicios: [
      'Tours Virtuales 3D',
      'Asesoramiento Legal',
      'Financiamiento',
      'Tasaciones',
      'Gestión de Alquileres',
      'Inversiones',
    ],
    empresa: [
      'Nosotros',
      'Equipo',
      'Carreras',
      'Prensa',
      'Blog',
      'Contacto',
    ],
    legal: [
      'Términos y Condiciones',
      'Política de Privacidad',
      'Cookies',
      'Disclaimer',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A0F29] to-[#050814] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00CFFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7B61FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] rounded-xl flex items-center justify-center">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">InnovaHomes</span>
              </motion.div>

              <motion.p
                className="text-white/70 mb-6 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Revolucionamos el mercado inmobiliario con tecnología de vanguardia, 
                ofreciendo experiencias únicas para encontrar tu hogar ideal.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-5 h-5 text-[#00CFFF]" />
                  <span>+54 11 4567-8900</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-5 h-5 text-[#00CFFF]" />
                  <span>info@innovahomes.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-5 h-5 text-[#00CFFF]" />
                  <span>Av. Corrientes 1234, CABA</span>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-lg mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href="#"
                        className="text-white/60 hover:text-[#00CFFF] transition-colors duration-300 text-sm"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Mantente actualizado
              </h3>
              <p className="text-white/60 text-sm">
                Recibe las mejores propiedades y noticias del mercado inmobiliario
              </p>
            </div>
            
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00CFFF] focus:ring-1 focus:ring-[#00CFFF] transition-all duration-300"
              />
              <motion.button
                className="bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] text-white px-6 py-3 rounded-r-lg font-medium hover:shadow-lg hover:shadow-[#00CFFF]/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              className="text-white/60 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 InnovaHomes. Todos los derechos reservados.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-[#00CFFF] hover:to-[#7B61FF] hover:border-transparent transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#00CFFF]/25 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;