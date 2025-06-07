import Image from "next/image";
import { Navigation } from "@/components/ui/Navigation";
import { About } from "@/components/ui/About";
import { Skills } from "@/components/ui/Skills";
import { Projects } from "@/components/ui/Projects";
import { Publications } from "@/components/ui/Publications";
import { Experience } from "@/components/ui/Experience";
import { Contact } from "@/components/ui/Contact";
import { Education } from "@/components/ui/Education";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-[#F8F9FA] via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/20 bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,50%,white)] dark:[mask-image:linear-gradient(to_bottom,transparent,50%,#0F172A)] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <div className="relative mx-auto mb-8">
              <div className="relative rounded-full h-32 w-32 md:h-40 md:w-40 mx-auto overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-xl">
                <Image
                  src="/Photo_Professionnelle.jpg"
                  alt="Oscar Houessou"
                  fill
                  className="object-cover object-[center_20%] transform translate-y-8"
                  priority
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Oscar HOUESSOU
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Je transforme les données en décisions stratégiques
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
              Ingénieur en Mathématiques Appliquées, je suis Data Scientist chez Gozem, où je développe des produits analytiques innovants qui transforment la prise de décision stratégique.  De la modélisation à la mise en production, je conçois des solutions intelligentes qui permettent aux équipes de mieux décider.
            </p>
            {/* <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              De la modélisation à la mise en production, je conçois des solutions intelligentes qui permettent aux équipes de mieux décider, plus vite.
            </p> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16"> {/* Ajout de mb-16 pour l'espace */}
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
              >
                Me contacter
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200"
              >
                Voir mes projets
              </a>
            </div>

            {/* Scroll Indicator - Maintenant sous les boutons */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg 
                className="w-6 h-6 text-gray-400" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 space-y-32 pb-32">
          <About />
          <Experience />
          <Education />
          <Projects />
          <Publications />
          <Skills />
          <Contact />
        </div>
      </main>
    </>
  );
}
