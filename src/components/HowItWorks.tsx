import React from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, FileCheck, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Encontrá tu propiedad ideal',
      description: 'Nuestra IA analiza tus preferencias y te muestra propiedades personalizadas que se adaptan perfectamente a tu estilo de vida y presupuesto.',
      color: 'from-[#00CFFF] to-[#0099CC]',
    },
    {
      number: '02',
      icon: Eye,
      title: 'Explorá con tour virtual',
      description: 'Recorre cada espacio con tecnología 3D inmersiva. Conoce cada detalle desde la comodidad de tu hogar antes de decidir visitarla físicamente.',
      color: 'from-[#7B61FF] to-[#5B47CC]',
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'Cerrá contrato digitalmente',
      description: 'Firma todos los documentos de forma 100% digital con validez legal completa. Proceso seguro, rápido y sin papeleos innecesarios.',
      color: 'from-[#00CFFF] to-[#7B61FF]',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0F29] to-[#1a1f3a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00CFFF]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Cómo <span className="bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] bg-clip-text text-transparent">funciona?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tres simples pasos para encontrar y adquirir tu propiedad ideal con la tecnología más avanzada del mercado
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00CFFF] via-[#7B61FF] to-[#00CFFF] opacity-30 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Card */}
                <motion.div
                  className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-[#00CFFF]/50 transition-all duration-500 group overflow-hidden"
                  whileHover={{ y: -10 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Step Number */}
                  <div className="absolute top-6 right-6">
                    <span className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00CFFF] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center text-[#00CFFF] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">Saber más</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  />
                </motion.div>

                {/* Arrow Between Steps (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¿Listo para comenzar tu búsqueda?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Únete a miles de familias que ya encontraron su hogar ideal con nuestra tecnología innovadora
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#00CFFF]/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar Búsqueda
            </motion.button>
            
            <motion.button
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;