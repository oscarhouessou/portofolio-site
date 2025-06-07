import { AnimatedSection } from "./AnimatedSection";

export function Publications() {
  const publications = [
    {
      title: "Comparison of Two Recurrent Neural Networks for Rainfall-Runoff Modeling in the Zou River Basin at Atchérigbé (Bénin)",
      description: "Cette étude compare les modèles LSTM et GRU pour la modélisation pluie-débit dans le bassin de la rivière Zou, montrant que les deux atteignent une haute précision, avec un léger avantage pour GRU.",
      link: "https://www.scirp.org/journal/paperinformation?paperid=136353",
      year: "2023"
    },
    {
      title: "Modeling River Discharge Using Deep Learning in the Ouémé Catchment at Savè Outlet (Benin, West Africa)",
      description: "Cette étude démontre l'efficacité des modèles LSTM et GRU pour simuler le débit fluvial dans le bassin de l'Ouémé, avec une précision élevée (R² > 0.97, NSE > 0.97).",
      link: "https://doi.org/10.14445/23939206/IJGGS-V10I1P103",
      year: "2023"
    }
  ];

  return (
    <AnimatedSection id="publications">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
        Publications
      </h2>

      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <a 
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {pub.title}
                </h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 shrink-0">
                  {pub.year}
                </span>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {pub.description}
              </p>
              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                <span>Lire l'article</span>
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
        <p className="text-center text-gray-700 dark:text-gray-300">
          Je suis actuellement en préparation pour un master recherche au Mila avec une perspective de doctorat, 
          continuant ainsi à allier recherche académique et applications industrielles.
        </p>
      </div>
    </AnimatedSection>
  );
}