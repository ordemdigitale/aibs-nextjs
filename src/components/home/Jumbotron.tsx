'use client';

import Image from "next/image";

export default function Jumbotron() {
  return (
    <section className="flex flex-col xl:flex-row">
        {/* Image Section (Left) */}
        <div className="flex flex-col xl:w-8/12">
          <Image
            src="/_section_about_img.jpg" // Replace with your image path
            alt="Graduate"
            className="w-full h-auto object-cover shadow-md"
            width={500}
            height={500}
          />
        </div>
        
        {/* Form Section (Right) */}
        <div className="flex w-full xl:w-4/12 justify-center mt-6 xl:mt-0">
          <div className="px-10 z-1">
            <div className="w-full rounded-xl shadow-2xl drop-shadow-2xl p-6 sm:px-8 md:p-8">
              <form className="space-y-8 font-poppins">
                <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 text-center font-poppins">
                  S&apos;inscrire à un programme
                </h5>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="textinput bg-slate-100 border py-5 rounded-full focus:border-blue-500 block px-6 border-transparent text-base text-gray-900 focus:ring-blue-500 w-full"
                />
                <input
                  type="email"
                  placeholder="Votre e-mail"
                  className="textinput bg-slate-100 border py-5 rounded-full focus:border-blue-500 block px-6 border-transparent text-base text-gray-900 focus:ring-blue-500 w-full"
                />
                <input
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  className="textinput bg-slate-100 border py-5 rounded-full focus:border-blue-500 block px-6 border-transparent text-base text-gray-900 focus:ring-blue-500 w-full"
                />
                <select className="textinput bg-slate-100 border py-5 rounded-full focus:border-blue-500 block px-6 border-transparent text-base text-gray-900 focus:ring-blue-500 w-full">
                  <option defaultValue="Sélectionner un programme">Sélectionner un programme</option>
                  <option>------------------------</option>
                  <option>BTS</option>
                  <option>Bachelor Management International</option>
                  <option>Licence de Droit</option>
                  <option>Licence Professionnel</option>
                  <option>Master Professionel</option>
                  <option>MBA</option>
                  <option>VAP/VAE</option>
                  <option>Bourse études en Chine</option>
                </select>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 border-2 border-transparent transition duration-700 ease-in-out hover:bg-white hover:text-blue-700 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-6 py-5 text-center"
                >
                  Valider
                </button>
              </form>
            </div>
          </div>
        </div>

        
    </section>
  );
}