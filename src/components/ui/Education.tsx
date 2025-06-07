'use client';

import { AnimatedSection } from './AnimatedSection';

type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
};

export function Education() {
  const education: Education[] = [
    {
      school: 'École Nationale Supérieure de Génie Mathématiques et Modélisation (ENSGMM)',
      degree: 'Ingénieur en Mathématiques Appliquées et Modélisation',
      period: '2020 - 2022',
      location: 'Cotonou, Bénin',
      details: [
        'Spécialisation en Machine Learning et Data Science',
        'Modélisation mathématique et statistiques avancées',
        'Projets pratiques en analyse de données',
        'Formation en programmation scientifique'
      ]
    },
    {
      school: 'Institut National Supérieur des classes Préparatoires aux Etudes d\'Ingénieur (INSPEI)',
      degree: 'Classes Préparatoires aux Études d\'Ingénieur',
      period: '2018 - 2019',
      location: 'Cotonou, Bénin',
      details: [
        'Mathématiques avancées',
        'Physique et sciences de l\'ingénieur',
        'Préparation intensive aux écoles d\'ingénieurs'
      ]
    },
    {
      school: 'Collège d\'Enseignement Général HOUETO',
      degree: 'Baccalauréat Scientifique Série C',
      period: '2017',
      location: 'Cotonou, Bénin',
      details: [
        'Spécialisation en Mathématiques et Sciences Physiques',
        'Mention Très Bien'
      ]
    }
  ];

  return (
    <AnimatedSection id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Formation</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {edu.degree}
                </h3>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {edu.school}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.period} | {edu.location}
                </p>
              </div>
              <ul className="space-y-2">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="mr-2 text-blue-600">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}