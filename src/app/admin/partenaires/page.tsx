// Page to list "Partenaires" in the admin panel
import React from "react"
import { getAllPartenaires } from "@/drizzle/partenairesQueries"

export default async function PartenairePage() {
  const partenaires = await getAllPartenaires();

  return (
    <section>PartenairePage</section>
  )
}
