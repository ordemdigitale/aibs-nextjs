/* import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa' */
import Image from 'next/image'
import logo from '../../../../public/aibs_logo.png'

export default function Footer() {
  return (
    <footer className="w-full py-12 font-poppins">
      <div className="container mx-auto px-4 mb-22">
        <div className="grid gap-4 md:grid-cols-4">
          {/* Section one */}
          <div className='col-span-full md:col-span-2'>
            <Image
              src={logo}
              alt="logo" width={150} height={50} className="mb-4"
            />
            <p className="mb-4">
              AIBS est une institution de formation supérieure qui a pour slogan <br />« UN PAS SÛR VERS L’ENTREPRISE ! »
            </p>

            <ul className="space-y-3">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
                </svg> &nbsp;
                <div className='flex flex-col'>
                  <span>(+225) 27 22 44 50 49</span>
                  <span>(+225) 01 42 27 27 20</span>
                </div>
              </li>
              <li className="flex items-center">
                <span className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                  </svg> &nbsp;
                  info@atlantique-ibs.net
                </span>
              </li>
            </ul>
          </div>

          {/* Section two */}
          <div className='col-span-full md:col-span-1'>
            <h3 className="text-xl font-bold mb-4 uppercase">liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Actualités</a></li>
              <li><a href="https://promo-ci.youscribe.com/pysci/lp_service_gen?utm_source=youscribe&utm_medium=others&utm_campaign=HP" className="hover:text-blue-400">Bibliothèque numérique</a></li>
              <li><a href="https://myschool.atlantique-ibs.net/" className="hover:text-blue-400">E-learning</a></li>
            </ul>
          </div>

          {/* Section three */}
          <div className='col-span-full md:col-span-1'>
            <h3 className="text-xl font-bold mb-4 uppercase">à propos de aibs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Mot du PDG</a></li>
              <li><a href="/presentation" className="hover:text-blue-400">Présentation</a></li>
              <li><a href="#" className="hover:text-blue-400">Points forts</a></li>
              <li><a href="#" className="hover:text-blue-400">Notre politique qualité</a></li>
              <li><a href="#" className="hover:text-blue-400">Satisfaction client</a></li>
              <li><a href="#" className="hover:text-blue-400">Demande de Document</a></li>
              <li><a href="#" className="hover:text-blue-400">Demande de Vacation</a></li>
              <li><a href="#" className="hover:text-blue-400">Demande de Stagiaire</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-400">      
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="sm:text-center text-gray-400 ml-4">
            &copy; 2024 - {new Date().getFullYear()} AIBS. Tous droits réservés.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <ul className="flex items-center justify-center">
              {/* <!-- Social Network -->
              <!-- Facebook --> */}
              <li className="flex border-2 border-[#dce1e9] p-2 rounded-[50%] mr-4">
                <a href="https://www.facebook.com/aibscotedivoire/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#9198A4" className="size-6" viewBox="0 0 24 24">
                    <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
                </svg></a>
              </li>
              {/* <!-- Twitter --> */}
              <li className="flex border-2 border-[#dce1e9] p-2 rounded-[50%] mr-4">
                <a href="https://twitter.com/aibschool" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#9198A4" className="size-6" viewBox="0 0 24 24">
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                </svg></a>
              </li>
              {/* <!-- Instagram --> */}
              <li className="flex border-2 border-[#dce1e9] p-2 rounded-[50%] mr-4">
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#9198A4" className="size-6" viewBox="0 0 24 24">
                  <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                </svg></a>
              </li>
              {/* <!-- LinkedIn --> */}
              <li className="flex border-2 border-[#dce1e9] p-2 rounded-[50%] mr-4">
                <a href="https://www.linkedin.com/in/aibs-formation-et-accompagnement-09a050147?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BTiknKMJRbmmHlDoYoYCkA%3D%3D" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#9198A4" className="size-6" viewBox="0 0 50 50">
                    <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
                </svg></a>
              </li>
              {/* <!-- YouTube --> */}
              <li className="flex border-2 border-[#dce1e9] p-2 rounded-[50%] mr-4">
                <a href="https://www.youtube.com/channel/UCvD_ZYTt-O2c7KkHqFBtlMA" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#9198A4" className="size-6" viewBox="0 0 50 50">
                  <path fillRule="evenodd" d="M 13 5 L 16 14 L 16 20 L 18 20 L 18 14 L 21 5 L 19 5 L 17 11 L 15 5 Z M 24 9 C 22.933594 9 22.410156 9.167969 21.757813 9.703125 C 21.132813 10.230469 20.960938 10.636719 21 12 L 21 17 C 21 17.996094 21.164063 18.652344 21.765625 19.234375 C 22.390625 19.816406 22.980469 20 24 20 C 25.066406 20 25.648438 19.816406 26.25 19.234375 C 26.875 18.675781 27 17.996094 27 17 L 27 12 C 27 11.117188 26.84375 10.28125 26.238281 9.722656 C 25.613281 9.148438 24.96875 9 24 9 Z M 29 9 L 29 18 C 29 18.972656 29.980469 20 31 20 C 32.019531 20 32.558594 19.488281 33 19 L 33 20 L 35 20 L 35 9 L 33 9 L 33 17 C 32.988281 17.683594 32.183594 18 32 18 C 31.792969 18 31 17.957031 31 17 L 31 9 Z M 24 11 C 24.300781 11 25 10.996094 25 12 L 25 17 C 25 17.96875 24.324219 18 24 18 C 23.699219 18 23 17.988281 23 17 L 23 12 C 23 11.183594 23.433594 11 24 11 Z M 10 22 C 6.40625 22 4 24.382813 4 28 L 4 37.5 C 4 41.117188 6.40625 44 10 44 L 40 44 C 43.59375 44 46 41.617188 46 38 L 46 28 C 46 24.382813 43.59375 22 40 22 Z M 12 26 L 18 26 L 18 28 L 16 28 L 16 40 L 14 40 L 14 28 L 12 28 Z M 26 26 L 28 26 L 28 30 C 28.230469 29.640625 28.574219 29.355469 28.902344 29.195313 C 29.222656 29.03125 29.546875 28.9375 29.875 28.9375 C 30.523438 28.9375 31.03125 29.171875 31.378906 29.609375 C 31.726563 30.050781 32 30.636719 32 31.5 L 32 37.5 C 32 38.242188 31.75 38.703125 31.421875 39.097656 C 31.101563 39.492188 30.621094 39.992188 30 40 C 28.949219 40.011719 28.386719 39.449219 28 39 L 28 40 L 26 40 Z M 18 29 L 20 29 L 20 37 C 20 37.230469 20.269531 38.007813 21 38 C 21.8125 37.992188 21.820313 37.234375 22 37 L 22 29 L 24 29 L 24 40 L 22 40 L 22 39 C 21.628906 39.4375 21.4375 39.574219 21.019531 39.78125 C 20.605469 40.015625 20.183594 40 19.792969 40 C 19.308594 40 18.757813 39.5625 18.5 39.234375 C 18.269531 38.933594 18 38.625 18 38 Z M 36.199219 29 C 37.148438 29 37.816406 29.203125 38.320313 29.734375 C 38.835938 30.265625 39 30.886719 39 31.886719 L 39 35 L 35 35 L 35 36.546875 C 35 37.105469 35.074219 37.460938 35.21875 37.671875 C 35.355469 37.902344 35.632813 38.003906 36 38 C 36.40625 37.996094 36.664063 37.914063 36.800781 37.730469 C 36.941406 37.566406 37 37.101563 37 36.5 L 37 36 L 39 36 L 39 36.59375 C 39 37.683594 38.914063 38.496094 38.375 39.027344 C 37.867188 39.585938 37.074219 39.84375 36.035156 39.84375 C 35.085938 39.84375 34.34375 39.5625 33.8125 38.984375 C 33.28125 38.40625 33.003906 37.613281 33.003906 36.59375 L 33.003906 31.886719 C 33.003906 30.980469 33.320313 30.308594 33.902344 29.710938 C 34.371094 29.230469 35.25 29 36.199219 29 Z M 29 30.5 C 28.449219 30.5 28.007813 30.996094 28 31.5 L 28 37.5 C 28.007813 37.789063 28.449219 38 29 38 C 29.550781 38 30 37.574219 30 37.023438 L 30 32 C 30 31 29.550781 30.5 29 30.5 Z M 36 31 C 35.449219 31 35.007813 31.464844 35 32 L 35 33 L 37 33 L 37 32 C 37 31.386719 36.550781 31 36 31 Z"></path>
                </svg></a>
              </li>
              {/* <!-- / Social Network --> */}
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}