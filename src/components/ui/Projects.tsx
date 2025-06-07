'use client';

import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

export function Projects() {
  const projects = [
    {
      title: "Chatbot IA pour FAQ interne",
      description: "Développement d'un chatbot intelligent utilisant Langchain et OpenAI pour automatiser la gestion des questions fréquentes chez Gozem. Intégration avec Streamlit pour une interface utilisateur intuitive.",
      tags: ["LangChain", "OpenAI", "Streamlit", "Python"],
      category: "NLP"
    },
    {
      title: "Dashboard KPI Financiers",
      description: "Création d'un tableau de bord complet pour le suivi des KPIs financiers, intégrant des modèles de scoring et des visualisations interactives pour faciliter la prise de décision.",
      tags: ["Looker", "SQL", "Python", "Machine Learning"],
      category: "Business Intelligence"
    },
    {
      title: "Modélisation Hydrologique LSTM/GRU",
      description: "Implémentation de réseaux de neurones récurrents (LSTM et GRU) pour la modélisation des débits fluviaux, atteignant une précision remarquable (R² > 0.97).",
      tags: ["Deep Learning", "PyTorch", "LSTM", "GRU"],
      category: "Research"
    },
    {
      title: "Classificateur de Modulation",
      description: "Développement d'un système de classification automatique des modulations basé sur des statistiques cyclostationnaires et le deep learning.",
      tags: ["Deep Learning", "Signal Processing", "Python", "TensorFlow"],
      category: "Research"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'NLP', 'Business Intelligence', 'Research'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
        Projets
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
