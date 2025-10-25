import React from "react";
import Image from "next/image";
import type { ProgramsStructure } from "@/drizzle/schema";

type Props = {
  program: ProgramsStructure;
};

// Common content sections that can be customized per program type
const contentSections = {
  bts: {
    sections: [
      {
        title: "Objectifs de la Formation",
        content: (program: ProgramsStructure) => (
          <div className="prose prose-emerald max-w-none">
            <p>
              Le BTS {program.name} vise à former des professionnels capables de :
            </p>
            <ul>
              <li>Maîtriser les compétences techniques spécifiques au domaine</li>
              <li>Développer des compétences managériales</li>
              <li>S&apos;adapter aux évolutions du secteur</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Programme",
        content: (program: ProgramsStructure) => (
          <div className="prose prose-emerald max-w-none">
            <p>Le programme s&apos;articule autour de plusieurs axes :</p>
            <ul>
              <li>Formation générale</li>
              <li>Formation professionnelle</li>
              <li>Projets pratiques</li>
              <li>Stage en entreprise</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Débouchés",
        content: (program: ProgramsStructure) => (
          <div className="prose prose-emerald max-w-none">
            <p>Les diplômés peuvent accéder à des postes tels que :</p>
            <ul>
              <li>Professionnel spécialisé dans le domaine</li>
              <li>Assistant manager</li>
              <li>Chargé de projet</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  vae: {
    sections: [
      {
        title: "Processus VAE",
        content: (program: ProgramsStructure) => (
          <div className="prose prose-emerald max-w-none">
            <p>Le processus de VAE comprend plusieurs étapes :</p>
            <ul>
              <li>Recevabilité du dossier</li>
              <li>Constitution du dossier de validation</li>
              <li>Accompagnement personnalisé</li>
              <li>Passage devant le jury</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Conditions d'Accès",
        content: (program: ProgramsStructure) => (
          <div className="prose prose-emerald max-w-none">
            <p>Pour accéder à la VAE, vous devez justifier :</p>
            <ul>
              <li>Au moins 1 an d&apos;expérience professionnelle</li>
              <li>Une expérience en rapport avec la certification visée</li>
              <li>Des compétences correspondant au référentiel</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  master: {
    sections: [
      {
        title: "Objectifs du Master",
        content: (program: ProgramsStructure) => (
          <div className="prose prose-emerald max-w-none">
            <p>Le Master {program.name} permet de :</p>
            <ul>
              <li>Développer une expertise pointue</li>
              <li>Acquérir des compétences managériales avancées</li>
              <li>Se préparer à des postes à responsabilité</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Programme",
        content: (program: ProgramsStructure) => (
          <div className="prose prose-emerald max-w-none">
            <p>Formation de haut niveau incluant :</p>
            <ul>
              <li>Cours spécialisés</li>
              <li>Projets professionnels</li>
              <li>Stage ou alternance</li>
              <li>Mémoire de recherche</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  // Add more program types as needed
};

// Helper function to determine program type
const getProgramType = (program: ProgramsStructure): string => {
  if (!program.parentId) {
    // This is a main program
    if (program.name.toLowerCase().includes('bts')) return 'bts';
    if (program.name.toLowerCase().includes('vae')) return 'vae';
    if (program.name.toLowerCase().includes('master')) return 'master';
    // Add more conditions as needed
  } else {
    // This is a subprogram - get parent program type
    if (program.parent?.name.toLowerCase().includes('bts')) return 'bts';
    if (program.parent?.name.toLowerCase().includes('vae')) return 'vae';
    if (program.parent?.name.toLowerCase().includes('master')) return 'master';
    // Add more conditions as needed
  }
  return 'default';
};

export default function ProgramContent({ program }: Props) {
  const programType = getProgramType(program);
  const sections = contentSections[programType as keyof typeof contentSections]?.sections || [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Program Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{program.name}</h1>
        {program.description && (
          <p className="text-lg text-gray-600">{program.description}</p>
        )}
      </div>

      {/* Program Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {program.level && (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Niveau</h3>
            <p>{program.level}</p>
          </div>
        )}
        {program.duration && (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Durée</h3>
            <p>{program.duration}</p>
          </div>
        )}
        {program.campus && (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Campus</h3>
            <p>{program.campus}</p>
          </div>
        )}
        {program.rythm && (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Rythme</h3>
            <p>{program.rythm}</p>
          </div>
        )}
      </div>

      {/* Dynamic Content Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
            {section.content(program)}
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-12">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Pour plus d&apos;informations</h2>
          <p className="text-gray-600">
            Contactez nos conseillers pour en savoir plus sur {program.name} et découvrir
            comment cette formation peut répondre à vos objectifs professionnels.
          </p>
          {/* Add contact button or form here */}
        </div>
      </div>
    </div>
  );
}