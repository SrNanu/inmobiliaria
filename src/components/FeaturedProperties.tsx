import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Heart, Eye } from 'lucide-react';

const FeaturedProperties = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'departamentos', label: 'Departamentos' },
    { id: 'casas', label: 'Casas' },
    { id: 'oficinas', label: 'Oficinas' },
  ];

  const properties = [
    {
      id: 1,
      type: 'departamentos',
      title: 'Penthouse Moderno',
      location: 'Puerto Madero, CABA',
      price: '$850,000',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 3,
      baths: 2,
      area: '180m²',
      featured: true,
    },
    {
      id: 2,
      type: 'casas',
      title: 'Casa Inteligente',
      location: 'Nordelta, Buenos Aires',
      price: '$1,200,000',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 4,
      baths: 3,
      area: '320m²',
      featured: true,
    },
    {
      id: 3,
      type: 'oficinas',
      title: 'Oficina Premium',
      location: 'Microcentro, CABA',
      price: '$450,000',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 0,
      baths: 2,
      area: '120m²',
      featured: false,
    },
    {
      id: 4,
      type: 'departamentos',
      title: 'Loft Contemporáneo',
      location: 'Palermo, CABA',
      price: '$650,000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 2,
      baths: 1,
      area: '95m²',
      featured: false,
    },
    {
      id: 5,
      type: 'casas',
      title: 'Villa Exclusiva',
      location: 'San Isidro, Buenos Aires',
      price: '$2,100,000',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 5,
      baths: 4,
      area: '450m²',
      featured: true,
    },
    {
      id: 6,
      type: 'departamentos',
      title: 'Estudio Minimalista',
      location: 'Recoleta, CABA',
      price: '$380,000',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 1,
      baths: 1,
      area: '55m²',
      featured: false,
    },
  ];

  const filteredProperties = activeFilter === 'todos' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  return (
    <section id="propiedades" className="py-20 bg-gradient-to-b from-[#0A0F29] to-[#1a1f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Propiedades <span className="bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] bg-clip-text text-transparent">Destacadas</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Descubre nuestra selección exclusiva de propiedades premium con tecnología de vanguardia
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] text-white shadow-lg shadow-[#00CFFF]/25'
                  : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white/80 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-[#00CFFF]/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              layout
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destacado
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-bold text-white">{property.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00CFFF] transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="flex items-center text-white/60 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-white/80">
                  {property.beds > 0 && (
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.beds}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className="w-full mt-6 bg-gradient-to-r from-[#00CFFF] to-[#7B61FF] text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg hover:shadow-[#00CFFF]/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver Detalles
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todas las Propiedades
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;