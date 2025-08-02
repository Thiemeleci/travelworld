import React from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const Destinos: React.FC = () => {
  const destinos = [
    {
      id: 1,
      nome: 'Paris, França',
      imagem: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      preco: 'R$ 4.500',
      duracao: '7 dias',
      rating: 4.9,
      descricao: 'A cidade do amor e da luz, com sua arquitetura icônica'
    },
    {
      id: 2,
      nome: 'Tóquio, Japão',
      imagem: 'https://images.pexels.com/photos/2078774/pexels-photo-2078774.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      preco: 'R$ 6.200',
      duracao: '10 dias',
      rating: 4.8,
      descricao: 'Onde tradição e modernidade se encontram harmoniosamente'
    },
    {
      id: 3,
      nome: 'Santorini, Grécia',
      imagem: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      preco: 'R$ 5.800',
      duracao: '8 dias',
      rating: 4.9,
      descricao: 'Ilhas deslumbrantes com vistas do pôr do sol mais belo'
    },
    {
      id: 4,
      nome: 'Nova York, EUA',
      imagem: 'https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      preco: 'R$ 5.200',
      duracao: '6 dias',
      rating: 4.7,
      descricao: 'A cidade que nunca dorme, repleta de energia e cultura'
    },
    {
      id: 5,
      nome: 'Bali, Indonésia',
      imagem: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      preco: 'R$ 3.800',
      duracao: '9 dias',
      rating: 4.8,
      descricao: 'Paraíso tropical com praias pristinas e cultura rica'
    },
    {
      id: 6,
      nome: 'Toronto, Canada',
      imagem: 'https://passagenspromo.com.br/blog/wp-content/uploads/2019/10/cidades-do-canada.jpg',
      preco: 'R$ 7.500',
      duracao: '5 dias',
      rating: 4.6,
      descricao: 'Luxo e modernidade em meio ao deserto árabe'
    }
  ];

  return (
    <section id="destinos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Principais Destinos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore os destinos mais incríveis do mundo com nossos pacotes exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinos.map((destino) => (
            <div
              key={destino.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destino.imagem}
                  alt={destino.nome}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{destino.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-800">{destino.nome}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{destino.descricao}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{destino.preco}</span>
                    <p className="text-sm text-gray-500">{destino.duracao}</p>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-teal-500 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinos;