import React from 'react';
import { Check, Star, Plane, Hotel, Camera } from 'lucide-react';

const Planos: React.FC = () => {
  const planos = [
    {
      id: 1,
      nome: 'Básico',
      preco: 'R$ 2.999',
      periodo: 'por pessoa',
      icon: Plane,
      cor: 'from-blue-500 to-blue-600',
      popular: false,
      beneficios: [
        'Passagem aérea incluída',
        'Hospedagem 3 estrelas',
        '5 dias de viagem',
        'Seguro viagem básico',
        'Suporte 24h'
      ]
    },
    {
      id: 2,
      nome: 'Premium',
      preco: 'R$ 4.999',
      periodo: 'por pessoa',
      icon: Hotel,
      cor: 'from-purple-500 to-pink-500',
      popular: true,
      beneficios: [
        'Passagem aérea executiva',
        'Hospedagem 4 estrelas',
        '8 dias de viagem',
        'Passeios incluídos',
        'Seguro viagem completo',
        'Transfers privativos',
        'Suporte 24h prioritário'
      ]
    },
    {
      id: 3,
      nome: 'Luxo',
      preco: 'R$ 8.999',
      periodo: 'por pessoa',
      icon: Star,
      cor: 'from-yellow-500 to-orange-500',
      popular: false,
      beneficios: [
        'Passagem primeira classe',
        'Hospedagem 5 estrelas',
        '12 dias de viagem',
        'Todos os passeios incluídos',
        'Seguro viagem premium',
        'Transfers em carros de luxo',
        'Guia personalizado',
        'Experiências exclusivas',
        'Suporte VIP 24h'
      ]
    }
  ];

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Nossos Planos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano perfeito para sua próxima aventura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planos.map((plano) => {
            const IconComponent = plano.icon;
            return (
              <div
                key={plano.id}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plano.popular ? 'border-2 border-purple-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plano.cor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plano.nome}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-800">{plano.preco}</span>
                    <span className="text-gray-600 ml-2">{plano.periodo}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plano.beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 bg-gradient-to-r ${plano.cor} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${plano.cor} hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >
                  Escolher Plano
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Todos os planos incluem cancelamento gratuito até 48h antes da viagem
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Ver termos e condições
          </button>
        </div>
      </div>
    </section>
  );
};

export default Planos;