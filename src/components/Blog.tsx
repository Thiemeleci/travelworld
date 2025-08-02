import React from 'react';
import { Calendar, User, ArrowRight, Eye } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      titulo: '10 Curiosidades Incríveis sobre Paris',
      imagem: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      resumo: 'Descubra segredos fascinantes da Cidade Luz que poucos turistas conhecem',
      autor: 'Ana Silva',
      data: '15 Mar 2024',
      categoria: 'Curiosidades',
      visualizacoes: '2.5k'
    },
    {
      id: 2,
      titulo: 'Guia Completo: O que Fazer em Tóquio',
      imagem: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      resumo: 'Explore a capital japonesa como um local com nossas dicas exclusivas',
      autor: 'Pedro Santos',
      data: '12 Mar 2024',
      categoria: 'Guias',
      visualizacoes: '3.1k'
    },
    {
      id: 3,
      titulo: 'As Praias Mais Paradisíacas de Bali',
      imagem: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      resumo: 'Conheça as praias secretas e os melhores spots para relaxar na ilha dos deuses',
      autor: 'Maria Costa',
      data: '08 Mar 2024',
      categoria: 'Destinos',
      visualizacoes: '1.8k'
    },
    {
      id: 4,
      titulo: 'Tradições Culinárias da Grécia',
      imagem: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      resumo: 'Uma jornada gastronômica pelas tradições milenares da culinária grega',
      autor: 'Carlos Oliveira',
      data: '05 Mar 2024',
      categoria: 'Gastronomia',
      visualizacoes: '2.2k'
    },
    {
      id: 5,
      titulo: 'Arquitetura Moderna de Toronto',
      imagem: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/fd/ac/c1.jpg',
      resumo: 'A arquitetura moderna de Toronto combina arranha-céus de vidro, design arrojado e sustentabilidade.',
      autor: 'Julia Ferreira',
      data: '02 Mar 2024',
      categoria: 'Arquitetura',
      visualizacoes: '1.9k'
    },
    {
      id: 6,
      titulo: 'Central Park: O Coração Verde de NYC',
      imagem: 'https://www.planetware.com/photos-large/USNY/new-york-city-central-park-1.jpg',
      resumo: 'História e curiosidades sobre o parque mais famoso de Nova York',
      autor: 'Roberto Lima',
      data: '28 Fev 2024',
      categoria: 'História',
      visualizacoes: '2.7k'
    }
  ];

  const categorias = ['Todos', 'Curiosidades', 'Guias', 'Destinos', 'Gastronomia', 'Arquitetura', 'História'];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Blog de Viagens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dicas, curiosidades e histórias inspiradoras dos destinos mais incríveis do mundo
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className="px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.imagem}
                  alt={post.titulo}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.categoria}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{post.visualizacoes}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.titulo}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.resumo}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.autor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.data}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-teal-500 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Ler Mais</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            Ver Todos os Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;