import { AnimatedSection } from "./AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
        À Propos
      </h2>
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p className="text-lg leading-relaxed">
          Ingénieur en mathématiques appliquées et modélisation, avec une forte spécialisation en machine learning
          et intelligence artificielle. Fort de 3 ans d'expérience en tant que data scientist au Bénin, j'ai dirigé
          des projets analytiques d'envergure chez Gozem.
        </p>
        <p className="text-lg leading-relaxed">
          En tant que lead data de la squad Financing, j'ai conçu des modèles de scoring sophistiqués,
          automatisé des processus financiers via FastAPI, et déployé des dashboards stratégiques qui ont
          significativement impacté la prise de décision.
        </p>
        <p className="text-lg leading-relaxed">
          Mon profil hybride combine expertise industrielle et recherche académique. J'ai publié deux articles
          scientifiques sur la modélisation hydrologique utilisant des réseaux de neurones récurrents (LSTM/GRU),
          démontrant ma capacité à appliquer des techniques avancées de deep learning à des problèmes concrets.
        </p>
      </div>

      <div className="flex justify-center gap-8 mt-12">
        <a
          href="mailto:oscarhouessou0@gmail.com"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contact
        </a>

        <a
          href="https://www.linkedin.com/in/oscarhouessou"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </AnimatedSection>
  );
}
