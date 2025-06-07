'use client';

import { AnimatedSection } from './AnimatedSection';

export function Skills() {
  const skillCategories = [
    {
      title: 'Machine Learning & Deep Learning',
      skills: [
        'Scikit-learn',
        'PyTorch',
        'TensorFlow',
        'Keras',
        'LSTM/GRU',
        'MLflow'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z"/>
        </svg>
      )
    },
    {
      title: 'MLOps & Data Engineering',
      skills: [
        'Airflow',
        'Git',
        'FastAPI',
        'Streamlit',
        'PostgreSQL',
        'Docker'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      )
    },
    {
      title: 'NLP & LLMs',
      skills: [
        'OpenAI API',
        'RAG',
        'LangChain',
        'FAISS',
        'Chroma',
        'Vector Databases'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      )
    },
    {
      title: 'Visualisation & BI',
      skills: [
        'Looker Studio',
        'Tableau',
        'Power BI',
        'R Shiny',
        'Plotly',
        'Matplotlib'
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      )
    }
  ];

  return (
    <AnimatedSection id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
        Compétences
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-600 dark:text-blue-400">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <div className="px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Soft Skills:</span> Travail d'équipe, Organisation, Communication, Adaptabilité, Autonomie
        </div>
        <div className="px-6 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Langues:</span> Français (natif), Anglais (professionnel)
        </div>
      </div>
    </AnimatedSection>
  );
}
