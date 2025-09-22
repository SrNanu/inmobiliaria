import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5491145678900'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre las propiedades disponibles en InnovaHomes.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="group relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(34, 197, 94, 0.4)',
            '0 0 0 20px rgba(34, 197, 94, 0)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: 10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          ¡Chatea con nosotros!
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-white/10 rotate-45 border-r border-b border-white/20" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;