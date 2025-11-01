import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="w-full h-full mx-auto font-poppins">
      {/* Page content */}
      <div className="max-w-5xl mx-auto my-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Actualité non trouvée</h1>
        <p className="text-gray-700">
          Désolé, l&apos;actualité que vous recherchez n&apos;existe pas ou a été supprimée.
        </p>
      </div>
      {/* Return to page "Actualités" */}
      <div className="max-w-5xl mx-auto my-10 text-center">
        <Link
          href="/actualites"
          className="text-white bg-blue-700 border-2 border-transparent transition duration-700 ease-in-out hover:bg-white hover:text-blue-700 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-6 py-5 text-center">
          Retourner à la liste des actualités
        </Link>
      </div>
    </section>
  )
}
