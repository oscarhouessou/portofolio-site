'use client';

import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
};

type Experiences = {
  [key: string]: Experience;
};

export function Experience() {
  const [activeTab, setActiveTab] = useState<'gozem' | 'lha' | 'gozem-internship' | 'internship'>('gozem');

  const experiences: Experiences = {
    gozem: {
      company: 'Gozem',
      role: 'Data Scientist - Lead Financing Squad',
      period: 'Octobre 2023 - Présent',
      location: 'Cotonou, Bénin',
      responsibilities: [
        'Direction de projets analytiques majeurs pour la squad Financing',
        'Développement et déploiement de modèles de scoring pour l\'évaluation des contrats',
        'Création de tableaux de bord Looker pour le suivi des KPIs',
        'Implémentation de systèmes automatisés de vérification de marque',
        'Analyse géospatiale des marchés et optimisation des routes',
        'Développement de POC pour l\'inspection automatisée des véhicules'
      ]
    },
    'gozem-internship': {
      company: 'Gozem',
      role: 'ML Engineer Intern',
      period: 'Mars 2023 - Septembre 2023',
      location: 'Cotonou, Bénin',
      responsibilities: [
        'Conception et développement d\'un système de scoring pour évaluer l\'éligibilité des champions',
        'Création d\'un tableau de bord interactif Streamlit pour la visualisation des résultats du modèle',
        'Implémentation de techniques d\'interprétabilité des modèles pour une prise de décision transparente',
        'Analyse géospatiale des points d\'intérêt (pharmacies, centres commerciaux) autour des champions',
        'Développement de KPIs cruciaux pour l\'analyse des performances des champions',
        'Création d\'un système de détection et d\'extraction des numéros de châssis des cartes grises'
      ]
    },
    lha: {
      company: 'Laboratoire d\'Hydrologie Appliquée (LHA/UAC)',
      role: 'Assistant de Recherche',
      period: 'Janvier - Mars 2023',
      location: 'Cotonou, Bénin',
      responsibilities: [
        'Publication de recherches sur la modélisation pluie-débit avec des réseaux de neurones récurrents',
        'Développement de modèles LSTM et GRU pour la prévision hydrologique',
        'Analyse comparative des performances des différentes architectures de réseaux de neurones',
        'Rédaction d\'articles scientifiques publiés dans des revues internationales'
      ]
    },
    internship: {
      company: 'Laboratoire d\'Hydrologie Appliquée (LHA/UAC)',
      role: 'Stage de fin d\'études',
      period: 'Juin - Décembre 2022',
      location: 'Cotonou, Bénin',
      responsibilities: [
        'Recherche approfondie en modélisation hydrologique',
        'Application de techniques avancées de machine learning',
        'Collecte et analyse de données hydrologiques',
        'Développement de solutions innovantes pour la prévision des débits'
      ]
    }
  };

  return (
    <AnimatedSection id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Mon Expérience</h2>
        
        {/* Tabs horizontaux */}
        <div className="flex justify-center mb-8 space-x-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('gozem')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'gozem'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            Data Scientist Gozem
          </button>
          <button
            onClick={() => setActiveTab('gozem-internship')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'gozem-internship'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            Stage Gozem
          </button>
          <button
            onClick={() => setActiveTab('lha')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'lha'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            LHA/UAC
          </button>
          <button
            onClick={() => setActiveTab('internship')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'internship'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            Stage LHA
          </button>
        </div>

        {/* Contenu de l'expérience */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold">{experiences[activeTab].role}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {experiences[activeTab].company}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {experiences[activeTab].period} | {experiences[activeTab].location}
            </p>
          </div>
          <ul className="space-y-2">
            {experiences[activeTab].responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
