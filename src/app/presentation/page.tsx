import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageHeader from '@/components/layout/PageHeader'

export default function Presentation() {
  return (
    <section className="w-full mx-auto">
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
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">Présentation</span>
              </div>
            </li>

          </ol>
        </nav>
      </div>
      {/* Page content */}
      <div className="max-w-5xl mx-auto my-10">
        <h2 className="font-poppins font-bold text-3xl text-green-600">
          La Business School AIBS
        </h2>

        <p>
          <Image
            alt="img"
            src="https://www.atlantique-ibs.net/media/uploads/ck/2024/07/12/image-presentation.jfif"
            className="float-left h-[338px] m-2.5 ml-6 w-[450px]"
          />
        </p>

        <p><strong>Créée par des cadres d&apos;entreprise et des&nbsp;professionnels de la formation, ATLANTIQUE&nbsp;INTERNATIONAL BUSINESS SCHOOL (AIBS) se spécialise dans la formation par&nbsp;alternance et la formation professionnelle&nbsp;continue.</strong></p>

        <p><br />
        <strong>AIBS est une institution de formation supérieure dont le slogan est&nbsp;«&nbsp;UN PAS SÛR VERS L&apos;ENTREPRISE ! »&nbsp;résumant ainsi l&apos;objectif premier&nbsp;de l&apos;institution qui est d&apos;apporter au système&nbsp;de formation supérieure en Côte d&apos;Ivoire une&nbsp;valeur ajoutée (une formation de qualité à&nbsp;standard international alliant –théorie et pratique).</strong></p>

        <p><br />
        <strong>Ainsi nous nous positionnons comme une solution au problème récurant qu&apos;est l&apos;emploi après&nbsp;la formation supérieure par nos innovations.</strong></p>

        <p>&nbsp;</p>

        <p>&nbsp;</p>

        <h3>&nbsp;</h3>

        <h3>AIBS Au Coeur Du Dynamisme Et De L&apos;innovation&nbsp;</h3>

        <p>&nbsp;</p>

        <p>AIBS&nbsp;est une institution progressiste et dynamique&nbsp;offrant une qualité et une éducation innovante&nbsp;dans la ville d&apos;Abidjan en Côte d&apos;Ivoire. En collaboration avec des universités et écoles Internationales, &nbsp;AIBS veut apporter un plus au système&nbsp;éducatif Ivoirien et sous-régional pour répondre&nbsp;aux besoins de formations de nos nations.</p>

        <p>&nbsp;</p>

        <p>La formation professionnelle représente non&nbsp;seulement un investissement économique&nbsp;dans le capital humain, mais elle contribue&nbsp;à la socialisation, à la construction nationale,&nbsp;et au nivellement des inégalités sociales.</p>
      </div>
    </section>
  )
}