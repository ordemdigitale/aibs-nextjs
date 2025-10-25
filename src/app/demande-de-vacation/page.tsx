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
                  Demande de vacation
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
              Rejoignez notre équipe d&apos;enseignants vacataires !
            </h2>
            <p>&nbsp;</p>
            <p>
              À Atlantique International Business School, nous nous engageons à offrir à nos étudiants une éducation de qualité, portée par des enseignants passionnés et experts dans leurs domaines.
            </p>

            <p><br />
              Nous sommes constamment à la recherche de professionnels qualifiés et d&apos;enseignants expérimentés prêts à partager leurs connaissances avec la prochaine génération de leaders.
            </p>

            <p>&nbsp;</p>

            <p>
              En tant que vacataire, vous aurez l&apos;opportunité de contribuer à la formation de nos étudiants dans un environnement dynamique et innovant. Que vous soyez un professionnel en activité ou un enseignant en quête d&apos;une expérience supplémentaire, votre expertise est la bienvenue.
            </p>

            <p><br />
              Déposez dès maintenant votre demande de vacation et intégrez un établissement où l&apos;excellence et l&apos;innovation sont au cœur de notre mission éducative.
            </p>

            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image 
              src="https://atlantique-ibs.net/media/uploads/ck/2024/10/17/vacation-aibs_kWS02o8.jpg"
              alt="placeholder" 
              className="w-full h-auto rounded-lg shadow-md"
              style={{ float: "right", height: "350px", width: "250px" }}
              width={250}
              height={350}
            />
          </div>

        </div>
        {/* Button */}
        <div className="flex justify-center mt-6">
          <Link
            className="text-white bg-blue-700 border-2 border-transparent transition duration-700 ease-in-out hover:bg-white hover:text-blue-700 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-6 py-5 text-center"
            href="https://forms.office.com/r/zvKWpA9mQT">
            Faites votre demande
          </Link>
        </div>
      </div>
    </section>
  )
}
