import React from 'react';
import { Award, Globe, Users, Heart, Star, CheckCircle } from 'lucide-react';

const Sobre: React.FC = () => {
  const valores = [
    {
      icon: Heart,
      titulo: 'Paixão por Viagens',
      descricao: 'Vivemos e respiramos turismo, buscando sempre as melhores experiências para nossos clientes'
    },
    {
      icon: Star,
      titulo: 'Excelência',
      descricao: 'Comprometidos com a qualidade em cada detalhe, desde o planejamento até o retorno'
    },
    {
      icon: Users,
      titulo: 'Atendimento Personalizado',
      descricao: 'Cada viagem é única, por isso oferecemos um atendimento dedicado e personalizado'
    },
    {
      icon: Globe,
      titulo: 'Expertise Global',
      descricao: 'Nossa experiência internacional garante viagens seguras e inesquecíveis'
    }
  ];

  const estatisticas = [
    { numero: '15+', descricao: 'Anos de Experiência' },
    { numero: '150+', descricao: 'Destinos Atendidos' },
    { numero: '10,000+', descricao: 'Clientes Satisfeitos' },
    { numero: '98%', descricao: 'Taxa de Satisfação' }
  ];

  const certificacoes = [
    'ABAV - Associação Brasileira de Agências de Viagens',
    'IATA - International Air Transport Association',
    'ISO 9001 - Gestão da Qualidade',
    'Cadastur - Ministério do Turismo'
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Quem Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de 15 anos realizando sonhos e criando memórias inesquecíveis ao redor do mundo
          </p>
        </div>

        {/* Nossa História */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              A TravelWorld nasceu em 2009 com o sonho de tornar as viagens mais acessíveis e especiais 
              para todos os brasileiros. Começamos como uma pequena agência familiar e hoje somos 
              referência no mercado de turismo internacional.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Nossa missão é proporcionar experiências transformadoras através de viagens cuidadosamente 
              planejadas, sempre priorizando a segurança, conforto e satisfação de nossos clientes.
            </p>
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-blue-500" />
              <span className="text-gray-700 font-semibold">Agência Premiada 5 Anos Consecutivos</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Equipe TravelWorld"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Anos de</div>
                <div className="text-sm">Experiência</div>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.numero}</div>
                <div className="text-blue-100">{stat.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => {
              const IconComponent = valor.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{valor.titulo}</h4>
                  <p className="text-gray-600">{valor.descricao}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificações */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Certificações e Licenças</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificacoes.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;