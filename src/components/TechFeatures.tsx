import React from 'react';
import { motion } from 'framer-motion';
import { Cuboid as Cube, Brain, FileText, Smartphone, Shield, Zap } from 'lucide-react';

const TechFeatures = () => {
  const features = [
    {
      icon: Cube,
      title: 'Tours Virtuales 3D',
      description: 'Explora cada propiedad con tecnología de realidad virtual inmersiva y recorridos interactivos en 360°.',
      color: 'from-[#00CFFF] to-[#0099CC]',
    },
    {
      icon: Brain,
      title: 'Recomendacion Inteligente',
      description: 'Nuestro algoritmo aprende tus preferencias y te recomienda propiedades perfectas para tu estilo de vida.',
      color: 'from-[#7B61FF] to-[#5B47CC]',
    },
    {
      icon: FileText,
      title: 'Contratos Digitales',
      description: 'Firma y gestiona todos tus documentos de forma 100% digital con validez legal completa.',
      color: 'from-[#00CFFF] to-[#7B61FF]',
    },
    {
      icon: Smartphone,
      title: 'App Móvil Avanzada',
      description: 'Controla todo desde tu smartphone: visitas, documentos, pagos y comunicación directa.',
      color: 'from-[#7B61FF] to-[#00CFFF]',
    },
    {
      icon: Shield,
      title: 'Seguridad Blockchain',
      description: 'Todas las transacciones están protegidas con tecnología blockchain para máxima seguridad.',
      color: 'from-[#00CFFF] to-[#0099CC]',
    },
    {
      icon: Zap,
      title: 'Proceso Instantáneo',
      description: 'Desde la búsqueda hasta la firma, todo el proceso se completa en tiempo récord.',
      color: 'from-[#7B61FF] to-[#5B47CC]',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1f3a] to-[#0A0F29] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00CFFF]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tecnología <span className="bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] bg-clip-text text-transparent">Revolucionaria</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Somos pioneros en la transformación digital del sector inmobiliario, 
            ofreciendo experiencias únicas e innovadoras
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <motion.div
                className="relative h-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#00CFFF]/50 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00CFFF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: '10K+', label: 'Propiedades' },
            { number: '95%', label: 'Satisfacción' },
            { number: '24/7', label: 'Soporte' },
            { number: '50+', label: 'Ciudades' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechFeatures;