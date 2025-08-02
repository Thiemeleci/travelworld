import React from 'react';
import { Plane, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const linksUteis = [
    'Política de Privacidade',
    'Termos de Uso',
    'Condições Gerais',
    'Cancelamentos',
    'Seguro Viagem',
    'Formas de Pagamento'
  ];

  const destinos = [
    'Europa',
    'América do Norte',
    'Ásia',
    'Oceania',
    'América do Sul',
    'África'
  ];

  const servicos = [
    'Pacotes Personalizados',
    'Viagens Corporativas',
    'Lua de Mel',
    'Intercâmbio',
    'Cruzeiros',
    'City Tours'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">TravelWorld</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Há mais de 15 anos realizando sonhos e criando memórias inesquecíveis 
              ao redor do mundo. Sua próxima aventura começa aqui.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="font-bold text-lg mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              {linksUteis.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinos */}
          <div>
            <h3 className="font-bold text-lg mb-6">Destinos</h3>
            <ul className="space-y-3">
              {destinos.map((destino, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {destino}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {servicos.map((servico, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {servico}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Telefone</p>
                <p className="font-semibold">+55 (11) 3333-4444</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">E-mail</p>
                <p className="font-semibold">contato@travelworld.com.br</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Endereço</p>
                <p className="font-semibold">New York, 1000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TravelWorld. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">CNPJ: 12.345.678/0001-90</span>
            <span className="text-gray-400 text-sm">Cadastur: 123456789</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;