import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Descubra o
          <span className="block bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            Mundo dos Sonhos
          </span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Embarque em aventuras inesquecíveis e crie memórias que durarão para sempre
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Explorar Destinos
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
            Ver Planos
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">150+</h3>
            <p className="text-blue-200">Destinos Únicos</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">10,000+</h3>
            <p className="text-blue-200">Clientes Satisfeitos</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">15</h3>
            <p className="text-blue-200">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;