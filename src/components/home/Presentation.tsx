import React from 'react';

export default function Presentation() {
  return (
    <>
      <section className="flex flex-col xl:flex-row">
        <div className="flex flex-col xl:w-8/12"></div>
        <div className="flex w-full xl:w-4/12 justify-center mt-6 xl:mt-0"></div>
      </section>

      <section className="w-full">
        <div className="px-8 xl:pl-16">
          <h3 className="mb-6 mt-4 capitalize text-5xl font-semibold font-karla text-tc-004"><span className="text-blue-600">éduquer, valoriser &amp; inspirer</span></h3>
          <div>
              <p className="mb-6 text-lg font-normal font-montserrat text-tc-004">
                Atlantique International Business School (AIBS) est le 1er établissement d&apos;enseignement supérieur ivoirien spécialisé dans la formation par Alternance et leader de la mobilité internationale des étudiants africains.</p>
              <p className="mb-6 text-lg font-normal font-montserrat text-tc-004">
                À Atlantique International Business School (AIBS), nous sommes dédiés à offrir une éducation de qualité supérieure qui prépare nos étudiants à exceller dans le monde professionnel.</p>
              <p className="mb-6 text-lg font-normal font-montserrat text-tc-004">
                Situé à Cocody Danga à proximité de l&apos;Institut Cœur de Grâce (ICG), notre institution se distingue par son approche innovante de la formation, combinant théorie et pratique pour assurer une intégration réussie de nos diplômés sur le marché du travail.</p>
          </div>
          <h2 className="text-2xl font-bold font-montserrat text-tc-004 mb-4">Nos valeurs sont :</h2>
          <ol className="list-disc list-inside mb-6 font-normal font-montserrat text-tc-004">
            <li className="text-xl font-bold font-montserrat text-tc-004"><span className="text-blue-600">Excellence</span></li>
            <p><span className="font-bold">« Les détails font la perfection, mais la perfection n&apos;est pas un détail ». Léonard de Vinci</span></p><br/>
            <p>C&apos;est pour nous une des valeurs les plus importantes. Elle se traduit par notre volonté permanente d&apos;apporter le meilleur service possible, de rechercher sans cesse à nous améliorer, d&apos;être exigeant envers nous-même pour proposer la meilleure offre de formation.</p>
            <br/>
            <li className="text-xl font-bold font-montserrat text-tc-004"><span className="text-blue-600">Esprit d&apos;équipe</span></li>
            <p>Les singularités de chacun sont complémentaires et contribuent au bon fonctionnement de l&apos;équipe. L&apos;esprit d&apos;équipe est, dès lors, l&apos;une des  valeurs défendues par AIBS.</p><br/>
            <p><span className="font-bold font-montserrat text-tc-004">Comme l&apos;a dit Henry Ford : “Se réunir est un début ; rester ensemble est un progrès ; travailler ensemble est la réussite”.</span></p>
            <br/>
            <li className="text-xl font-bold font-montserrat text-tc-004"><span className="text-blue-600">Innovation</span></li>
            <p>Si votre entreprise est incapable d&apos;innover, elle risque un retard dans sa productivité, la perte de clients et de parts de marché ou tout simplement la disparition. AIBS vise toujours l&apos;amélioration continue et pense constamment à des solutions qui sortent des sentiers battus.</p>
            <br/>
            <li className="text-xl font-bold font-montserrat text-tc-004"><span className="text-blue-600">Responsabilité</span></li>
            <p>A AIBS, nous intégrons  les préoccupations sociales et environnementales à  nos activités commerciales et nos relations avec nos parties prenantes.</p>
          </ol>
          <p className="text-lg font-bold font-montserrat text-tc-004">
            AIBS est engagé dans une démarche de double certification ISO 9001 version 2018 et 21001 version 2018
          </p>
          <br/>
          <h2 className="text-2xl font-bold mb-2 text-center font-montserrat">Notre slogan est : <span className="text-blue-600">AIBS, un pas sûr vers l&apos;entreprise !</span></h2>
        </div>
      </section>
    </>
  )
}
