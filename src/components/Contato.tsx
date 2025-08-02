import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contato: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.');
  };

  const informacoes = [
    {
      icon: Phone,
      titulo: 'Telefone',
      info: '+55 (11) 3333-4444',
      descricao: 'Seg à Sex: 8h às 18h'
    },
    {
      icon: Mail,
      titulo: 'E-mail',
      info: 'contato@travelworld.com.br',
      descricao: 'Respondemos em até 2 horas'
    },
    {
      icon: MapPin,
      titulo: 'Endereço',
      info: 'Av. Paulista, 1000 - São Paulo/SP',
      descricao: 'CEP: 01310-100'
    },
    {
      icon: Clock,
      titulo: 'Horário de Funcionamento',
      info: 'Segunda à Sexta: 8h às 18h',
      descricao: 'Sábado: 9h às 15h'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para planejar a viagem dos seus sonhos. Fale conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Informações de Contato</h3>
            <div className="space-y-6">
              {informacoes.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{info.titulo}</h4>
                      <p className="text-blue-600 font-medium mb-1">{info.info}</p>
                      <p className="text-gray-600 text-sm">{info.descricao}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white">
              <div className="flex items-center space-x-4">
                <MessageCircle className="w-8 h-8" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">WhatsApp</h4>
                  <p className="mb-2">+55 (11) 99999-8888</p>
                  <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Conversar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="destino" className="block text-sm font-medium text-gray-700 mb-2">
                    Destino de Interesse
                  </label>
                  <select
                    id="destino"
                    name="destino"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione um destino</option>
                    <option value="paris">Paris, França</option>
                    <option value="tokyo">Tóquio, Japão</option>
                    <option value="santorini">Santorini, Grécia</option>
                    <option value="newyork">Nova York, EUA</option>
                    <option value="bali">Bali, Indonésia</option>
                    <option value="dubai">Dubai, EAU</option>
                    <option value="outro">Outro destino</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Conte-nos sobre a viagem dos seus sonhos..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-500 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Mapa do Google seria integrado aqui</p>
                <p className="text-sm">Av. Paulista, 1000 - São Paulo/SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;