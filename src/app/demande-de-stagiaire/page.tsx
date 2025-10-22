import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import PageHeader from '@/components/layout/PageHeader'

export default function page() {
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
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                  Demande de stagiaire
                </span>
              </div>
            </li>

          </ol>
        </nav>
      </div>


      {/* Page content */}
      <div className="max-w-5xl mx-auto my-10">
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto">
          {/* Text Section */}
          <div className="mb-6 md:mb-0 text-md font-poppins">
            <h2 className="font-poppins font-bold text-[24px] text-center">
              Recrutez nos talents en stage !
            </h2>
            <p>&nbsp;</p>
            <p>
              Atlantique International Business School forme des étudiants ambitieux et compétents, prêts à mettre en pratique leurs connaissances au sein de votre entreprise.
            </p>

            <p><br />
              Nous vous offrons la possibilité de recruter des stagiaires issus de nos différents programmes, qu'il s'agisse de marketing, gestion, finance, ou tout autre domaine.
            </p>

            <p>&nbsp;</p>

            <p>
              Grâce à notre processus simplifié, vous pouvez soumettre en ligne vos demandes de stagiaires et trouver rapidement le profil qui correspond à vos besoins. Offrez à nos étudiants l'opportunité de contribuer à vos projets tout en acquérant une expérience professionnelle enrichissante.
            </p>

            <p><br />
              Déposez dès aujourd'hui votre demande de stagiaire et découvrez les talents de demain !
            </p>

            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image 
              src="https://atlantique-ibs.net/media/uploads/ck/2024/10/18/plan-de-travail-1-100.jpg"
              alt="placeholder" 
              className="w-full h-auto rounded-lg shadow-md"
              style={{ float: "right", height: "350px", width: "250px" }}
              width={400}
              height={350}
            />
          </div>

        </div>
        {/* Button */}
        <div className="flex justify-center mt-6">
          <Link
            className="text-white bg-blue-700 border-2 border-transparent transition duration-700 ease-in-out hover:bg-white hover:text-blue-700 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-6 py-5 text-center"
            href="https://forms.office.com/r/Kpn4hRNemV">
              Recrutez nos talents
          </Link>
        </div>
      </div>
    </section>
  )
}
