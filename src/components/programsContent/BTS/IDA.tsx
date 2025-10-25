import React from "react"
import type { ProgramsStructure } from "@/drizzle/schema";
import Image from "next/image";
import Link from "next/link";

type Props = {
  prop: ProgramsStructure;
};

export default function IDA({ prop }: Props) {
  return (
    /* Page content */
    <div className="max-w-5xl mx-auto my-10 flex flex-wrap justify-between font-poppins">
      <div className="xl:max-w-[600px] w-full">
        <p><strong>Lancez votre carrière dans la gestion commerciale avec Atlantique International Business School</strong></p>

        <p>&nbsp;</p>

        <p><strong>Pourquoi choisir le BTS Gestion Commerciale à AIBS ?</strong></p>

        <p>&nbsp;</p>

        <p>Le BTS Gestion Commerciale de Atlantique International Business School est conçu pour former des professionnels compétents et polyvalents, prêts à relever les défis du monde des affaires.</p>

        <p>En choisissant notre programme, vous bénéficierez d'une formation de qualité, alliant théorie et pratique, qui vous préparera à exceller dans des rôles variés au sein des départements commerciaux et marketing des entreprises.</p>

        <p>&nbsp;</p>

        <p><strong>Points forts&nbsp;du programme :</strong></p>

        <p>&nbsp;</p>

        <ol>
          <li>
          <p><strong>1. Formation pratique</strong> : Combinez apprentissage théorique et expérience professionnelle pour une intégration rapide et réussie sur le marché du travail.</p>
          </li>
        </ol>

        <p>&nbsp;</p>

        <ol>
          <li>
          <p><strong>2. Enseignement par des experts</strong> : Apprenez auprès de professionnels expérimentés et passionnés, qui vous transmettront leur savoir-faire et leurs compétences pratiques.</p>
          </li>
        </ol>

        <p>&nbsp;</p>

        <ol>
          <li>
          <p><strong>3. Partenariats avec des entreprises</strong> : Profitez de nos collaborations avec des entreprises locales pour des opportunités de stages enrichissantes et des perspectives d'emploi concrètes.</p>
          </li>
        </ol>

        <p>&nbsp;</p>

        <ol>
          <li>
          <p><strong>4. Développement de compétences clés</strong> : Acquérez des compétences en gestion, négociation, marketing, relation client, et bien plus encore, pour devenir un atout précieux pour toute organisation.</p>
          </li>
        </ol>

        <p><br />
        &nbsp;</p>

        <p><strong>Pourquoi nous faire confiance ?</strong></p>

        <p>&nbsp;</p>

        <ol>
          <li>
          <p><strong>1. Une Approche Personnalisée</strong> : Un suivi individualisé pour maximiser votre réussite académique et professionnelle.</p>
          </li>
        </ol>

        <p>&nbsp;</p>

        <ol>
          <li>
          <p><strong>2. Un Réseau Solide</strong> : Intégrez une communauté dynamique de professionnels et d'anciens étudiants pour des opportunités de networking et de mentorat.</p>
          </li>
        </ol>

        <p>&nbsp;</p>

        <ol>
          <li>
          <p><strong>3. Une Éducation de Qualité</strong> : Des méthodes pédagogiques innovantes et un environnement d'apprentissage moderne pour vous offrir le meilleur.</p>
          </li>
        </ol>

        <p><br />
        &nbsp;</p>

        <p><strong>Rejoignez-nous dès aujourd'hui !</strong></p>

        <p>&nbsp;</p>

        <p>Ne manquez pas l'opportunité de donner un coup de boost à votre carrière avec le BTS Gestion Commerciale de Atlantique International Business School.</p>

        <p>Inscrivez-vous maintenant et préparez-vous à devenir un leader dans le domaine de la gestion commerciale.</p>
                
        <br />
        <Link href="https://forms.office.com/r/FYBS8bDrE3" target="_blank" className="font-bold text-green-500 hover:underline hover:text-green-700">
          Postulez dès aujourd&apos;hui et donnez un nouvel élan à votre carrière ! BTS Gestion Commerciale.
        </Link>
      </div>

      <div className="max-w-[370px] w-full">
        <aside className="flex flex-col items-center px-3 mb-6">
          {/* <!-- Card Info --> */}
          <div className="max-w-sm p-6 rounded-lg bg-[#e3ecfa] mb-6">
            {/* <!-- Item 1 --> */}
            <div className="flex justify-between gap-6">
              <span className="uppercase font-bold">Niveau</span>
              <span>{prop.level}</span>
            </div>
            <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
            {/* <!-- Item 2 --> */}
            <div className="flex justify-between gap-8">
              <span className="uppercase font-bold">Campus</span>
              <span>{prop.campus}</span>
            </div>
            <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
            {/* <!-- Item 3 --> */}
            <div className="flex justify-between gap-8">
              <span className="uppercase font-bold">Langue</span>
              <span>{prop.langue}</span>
            </div>
            <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
            {/* <!-- Item 4 --> */}
            <div className="flex justify-between gap-8">
              <span className="uppercase font-bold">Rythme</span>
              <span>{prop.rythm}</span>
            </div>
            
            <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
            {/* <!-- Item 5 --> */}
            <div className="flex justify-between gap-8">
              <span className="uppercase font-bold">Professionnalisation</span>
              <span>Stage garanti</span>
            </div>
            
            
          </div>

          {/* <!-- Card Contact --> */}
          <div className="max-w-sm p-6 rounded-lg bg-[#e3ecfa] text-center mt-6">
            <p className="mb-3 font-bold text-xl text-blue-400">Vous avez des questions ?</p>
            <p className="mb-3 font-bold text-sm text-blue-800 uppercase">Contactez la Direction Commerciale au</p>
            <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
            <p className="font-bold text-lg">
              <span>(+225) 27 22 44 50 49</span> <br />
              <span>(+225) 01 42 27 27 20</span> <br />
              <span>(+225) 07 97 76 71 29</span>
            </p>
          </div>
        </aside>
        <Image
          src="https://www.atlantique-ibs.net/media/uploads/programmes/cover-bts-ges-com.jpg"
          alt={prop.name}
          width={300}
          height={600}
          className="w-full mb-10"
        />
      </div>
    </div>
  )
}
