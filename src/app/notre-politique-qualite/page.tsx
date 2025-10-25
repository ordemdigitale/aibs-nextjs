import React from "react"
import Link from "next/link"
import Image from "next/image"
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
              <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary">
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path>
                </svg>
                Accueil
              </Link>
            </li>
            
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                  Notre Politique Qualité
                </span>
              </div>
            </li>

          </ol>
        </nav>
      </div>

      {/* Page content */}
      <div className="max-w-5xl mx-auto my-10 flex flex-col xl:flex-row">
        {/* Text section */}
        <div className="flex flex-col xl:w-8/12">
        <h2 className="font-poppins font-bold text-[24px] text-center">
              NOTRE POLITIQUE QUALITE SMOE/F
            </h2>
          <p>&nbsp;</p>

<p>Depuis sa création en 2014, AIBS (Atlantique International Business School) a toujours privilégié la qualité de ses prestations. Ainsi, elle réalise sa mission qui est de contribuer à la consolidation de l’économie ivoirienne par la formation d’une ressource humaine de qualité adaptée aux besoins des organisations publiques et privées. AIBS, évoluant dans un environnement très concurrentiel, a bâti son système en prenant en compte son domaine d’activité, la réglementation en vigueur, les enjeux internes et externes, les besoins et attentes des parties intéres sées et des ressources disponibles.</p>

<p>&nbsp;</p>

<p>En tenant compte des évolutions pédagogiques, didactiques, scientifiques et techniques pertinentes, AIBS a bâti sa stratégie autour des axes suivants :</p>

<p><strong>1. DISPENSER DES PRESTATIONS DE FORMATIONS DE QUALITE</strong></p>

<p><strong>2. AFFIRMER UN LABEL DE QUALITÉ</strong></p>

<p><strong>3. ELARGIR ET AMELIORER NOTRE OFFRE DE FORMATION</strong></p>

<p><strong>4. ASSURER LA COMPETITIVITE ET LA PERENNITE DE AIBS</strong></p>

<p>&nbsp;</p>

<p>Nous nous engageons ainsi à :</p>

<ul>
	<li><strong>- Faire de la satisfaction des clients, la priorité de chaque collaborateur</strong></li>
	<li><strong>- Assurer la disponibilité des ressources</strong></li>
	<li><strong>- Respecter les dispositions légales et réglementaires applicables à notre domaine d’activité</strong></li>
	<li><strong>- Satisfaire à notre responsabilité sociétale</strong></li>
	<li><strong>- Gérer la propriété intellectuelle</strong></li>
	<li><strong>- Revoir et améliorer en permanence notre SMOE/F.</strong></li>
</ul>

<p>&nbsp;</p>

<p>Pour la période 2023-2025, nous nous fixons les objectifs suivants :</p>

<ul>
	<li><strong>- Assurer la conformité des programmes</strong></li>
	<li><strong>- Améliorer la gouvernance Assurer l&apos;insertion professionnelle de nos étudiants</strong></li>
	<li><strong>- Obtenir la double certification ISO 21001 version 2018 et 9001 version 2015</strong></li>
	<li><strong>- Assurer la satisfaction de nos clients et parties prenantes pertinentes</strong></li>
	<li><strong>- Développer des partenariats avec des institutions étrangères</strong></li>
	<li><strong>- Améliorer le e-learning Digitaliser les parcours de formation</strong></li>
	<li><strong>- Développer le capital humain</strong></li>
	<li><strong>- Renforcer la collaboration avec les organisations professionnelles</strong></li>
	<li><strong>- Développer des certificats métiers</strong></li>
	<li><strong>- Optimiser la gestion de nos finances</strong></li>
	<li><strong>- Assurer la veille concurrentielle</strong></li>
	<li><strong>- Assurer le bon fonctionnement des équipements</strong></li>
	<li><strong>- Développer le chiffre d&apos;affaires</strong></li>
	<li><strong>- Améliorer la communication</strong></li>
</ul>

<p>&nbsp;</p>

<p>La revue de direction sert de cadre pour la définition et/ou la revue de la politique</p>

<p>et des objectifs qualité. Nous nous engageons au travers de cette politique qualité à nous assurer de l’efficacité du SMOE/F, de sa capacité à atteindre les résultats attendus,</p>

<p>et de promouvoir l&apos;amélioration continue en veillant à ce que les moyens nécessaires</p>

<p>à l&apos;obtention des objectifs fixés soient disponibles. La qualité, c&apos;est l&apos;affaire de tous et de chacun.</p>
        </div>
        {/* Image section */}
        <div className="flex w-full xl:w-4/12 justify-center mt-6 xl:mt-0">
          <Image 
            src="https://www.atlantique-ibs.net/media/uploads/ck/2024/10/18/politique-qualite-2024_xvxtbqx.jpg" 
            alt="Placeholder" 
            className="w-full h-auto"
            style={{ float: "right" }}
            width={450}
            height={650}
          />
        </div>
      </div>
    </section>
  )
}
