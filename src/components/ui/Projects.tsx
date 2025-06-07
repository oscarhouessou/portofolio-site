'use client';

import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import Link from 'next/link';

export function Projects() {
  const projects = [
    {
      title: "HyMoLAP - Outil de Modélisation Hydrologique",
      description: "Application Shiny interactive pour la simulation et surveillance hydrométéorologique. Intègre des modèles hydrologiques classiques (ModHyPMA, GR4J) et des approches deep learning (LSTM, GRU) pour la prédiction des débits fluviaux. Interface intuitive permettant le chargement de données, la visualisation des résultats et l'ajustement des paramètres en temps réel.",
      tags: ["R Shiny", "Deep Learning", "Hydrologie", "LSTM/GRU", "Visualisation"],
      category: "Research",
      link: "https://oscarhouessou.shinyapps.io/hymolap1/",
      highlights: [
        "Interface interactive pour la modélisation pluie-débit",
        "Intégration de modèles classiques et IA",
        "Visualisation avancée des prédictions",
        "Haute précision des prévisions (R² > 0.97)"
      ]
    },
    {
      title: "Chatbot IA pour FAQ interne",
      description: "Développement d'un chatbot intelligent utilisant Langchain et OpenAI pour automatiser la gestion des questions fréquentes chez Gozem. Intégration avec Streamlit pour une interface utilisateur intuitive.",
      tags: ["LangChain", "OpenAI", "Streamlit", "Python"],
      category: "NLP",
      highlights: [
        "Automatisation du support utilisateur",
        "Réduction du temps de réponse",
        "Interface intuitive"
      ]
    },
    {
      title: "Dashboard KPI Financiers",
      description: "Création d'un tableau de bord complet pour le suivi des KPIs financiers, intégrant des modèles de scoring et des visualisations interactives pour faciliter la prise de décision.",
      tags: ["Looker", "SQL", "Python", "Machine Learning"],
      category: "Business Intelligence",
      highlights: [
        "Suivi en temps réel des KPIs",
        "Modèles de scoring intégrés",
        "Visualisations interactives"
      ]
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
  const categories = ['all', 'Research', 'NLP', 'Business Intelligence'];

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
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center gap-1 mb-4"
              >
                Voir le projet
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.highlights && (
              <ul className="mb-4 space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <span className="mr-2 text-blue-600">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
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
