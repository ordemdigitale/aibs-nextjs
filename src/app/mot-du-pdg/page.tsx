import React from "react"
import PageHeader from "@/components/layout/PageHeader"

export default function page() {
  return (
    <section className="w-full mx-auto font-poppins">
      {/* Page header */}
      <PageHeader />
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto text-white text-5xl font-extrabold">
        <nav className="flex py-3 text-gray-700" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            
            <li className="inline-flex items-center">
              <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary">
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path>
                </svg>
                Accueil
              </a>
            </li>
            
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">Mot du PDG</span>
              </div>
            </li>

          </ol>
        </nav>
      </div>
      {/* Page content */}
      <div className="max-w-5xl mx-auto my-10">
      <p>Depuis de longues années, l&apos;école ivoirienne subit de plein fouet les effets pervers d&apos;une crise internationale destructrice d&apos;emplois et de valeurs. En Côte d&apos;Ivoire, en dépit des nombreux efforts et initiatives, les apprenants issus du système scolaire ont du mal à trouver un premier emploi et quelque fois un stage. L&apos;inadéquation entre la formation reçue à l&apos;école et la réalité du monde professionnel a fini par convaincre le plus grand nombre que le système de formation doit être revu et adapté aux besoins et réalités de l&apos;entreprise.</p>

<p>&nbsp;</p>

<p><strong>Atlantique International Business School</strong>&nbsp;(<strong>AIBS</strong>) propose une alternative à la problématique de l&apos;adéquation formation emploi par la formation par alternance. Ce système de formation permet à l&apos;apprenant durant sa formation de pratiquer son métier par une immersion constante et prolongée en entreprise. Pour développer l&apos;employabilité de nos apprenants, un accent particulier sera mis sur l&apos;apprentissage du chinois (mandarin) et de l&apos;anglais. Nos offres de formation prennent également en compte les entreprises et leurs salariés.</p>

<p>&nbsp;</p>

<p>Avec notre partenaire français qui est l&apos;Ecole de Management de Normandie nous proposons des Masters à distance en prenant en compte la validation des acquis professionnels (VAP). Les salariés ont l&apos;occasion ainsi de voir leurs expériences professionnelles valorisées. Grace à notre réseau de consultant de haut niveau, nous offrons aux entreprises des formations de haut niveau et les accompagnons dans leur développement. Bienvenue à Atlantique International Business School, vous venez de poser un pas sûr vers l&apos;entreprise.</p>

<p className="text-right"><strong>Fousseny KONE</strong><br />
<em>Président Directeur Général AIBS</em></p>

<p className="text-right">&nbsp;</p>


  <h2 className="text-3xl font-bold">CHOISIR ATLANTIQUE INTERNATIONAL BUSINESS SCHOOL</h2>

<p>&nbsp;</p>

<p>Choisir AIBS, c&apos;est se donner une manière singulière d&apos;apprendre et d&apos;appréhender de futurs challenges personnels et professionnels.</p>

<p>&nbsp;</p>

<p>Choisir AIBS, c&apos;est être confronté à la réalité de l&apos;entreprise, à celle des métiers vous permettant de valider, compétences professionnelles de haut niveau et de révéler vos ambitions et talents.</p>

<p>&nbsp;</p>

<p><strong>Choisir AIBS, c&apos;est choisir :</strong></p>

<p>&nbsp;</p>

<ul>
	<li>• Une excellence académique</li>
	<li>• Une innovation pédagogique continue</li>
	<li>• Un large choix de parcours internationaux</li>
	<li>• Une qualité de vie sur notre campus</li>
	<li>• Un accompagnement vers l&apos;emploi</li>
</ul>

<p>&nbsp;</p>

      <p className="text-green-600">
        Faire de nos étudiants, des femmes et des hommes accomplis qui prennent leur avenir en main, les accompagner vers l&apos;emploi par une pédagogie de l&apos;encouragement, voici l&apos;engagement de la Direction de AIBS.
      </p>
    </div>
    </section>
  )
}