// seeds/seedPrograms.ts
// Seed script to populate the programs table with initial data
import { db } from "@/drizzle/db";
import { programs } from "@/drizzle/schema";

export async function migrateProgramsData() {
  try {
    // Insert main programs
    const mainPrograms = await db.insert(programs).values([
    { name: 'Brevet de Technicien Supérieur (BTS)', slug: 'bts', description: 'Programme de deux ans menant au diplôme de BTS.', level: 'Bac +2', campus: 'Cocody Danga', langue: 'Français', duration: '2 ans', thumbnail: 'https://atlantique-ibs.net/media/uploads/vignettes/_bts.jpg', cover: '/media/uploads/covers/bts-cover.jpg', order: 1 },
    { name: 'Bachelor', slug: 'bachelor', description: '', level: 'Bac +2', campus: 'Cocody Danga', langue: 'Français', rythm: 'Formation initiale', thumbnail: 'https://atlantique-ibs.net/media/uploads/vignettes/_bachelor.jpg', cover: '/media/uploads/covers/bts-cover.jpg', order: 2 },
    { name: 'Licence de Droit', slug: 'licence-de-droit', description: '', level: 'Bac +2', campus: 'Cocody Danga', langue: 'Français', rythm: 'Formation initiale', thumbnail: 'https://atlantique-ibs.net/media/uploads/vignettes/_licence-droit.jpg', cover: '/media/uploads/covers/bts-cover.jpg', order: 3 },
    { name: 'Licence Professionnelle', slug: 'licence-professionnelle', description: '', level: 'Bac +2', campus: 'Cocody Danga', langue: 'Français', rythm: 'Formation initiale', thumbnail: 'https://atlantique-ibs.net/media/uploads/vignettes/_licence-pro.jpg', cover: '/media/uploads/covers/bts-cover.jpg', order: 4 },
    { name: 'Bourse d\'étude en Chine', slug: 'bourde-detude-en-chine', description: '', level: 'Bac +2', campus: 'Cocody Danga', langue: 'Français', rythm: 'Formation initiale', thumbnail: 'https://atlantique-ibs.net/media/uploads/vignettes/_b-e-c.jpg', cover: '/media/uploads/covers/bts-cover.jpg', order: 5 },
    { name: 'Master Professionnel', slug: 'master-professionnel', description: '', level: 'Bac +2', campus: 'Cocody Danga', langue: 'Français', rythm: 'Formation initiale', thumbnail: 'https://atlantique-ibs.net/media/uploads/vignettes/_master-pro.jpg', cover: '/media/uploads/covers/bts-cover.jpg', order: 6 },
    { name: 'MBA', slug: 'mba', description: '', level: 'Bac +2', campus: 'Cocody Danga', langue: 'Français', rythm: 'Formation initiale', thumbnail: 'https://atlantique-ibs.net/media/uploads/vignettes/_mba.jpg', cover: '/media/uploads/covers/bts-cover.jpg', order: 7 },
    { name: 'VAP \ VAE', slug: 'vap-vae', description: '', level: 'Bac +2', campus: 'Cocody Danga', langue: 'Français', rythm: 'Formation initiale', thumbnail: 'https://atlantique-ibs.net/media/uploads/vignettes/_vap-vae.jpg', cover: '/media/uploads/covers/bts-cover.jpg', order: 8 },
  ]).returning();

  // Insert sub-programs (linked to main programs)
  await db.insert(programs).values([
    { name: 'BTS Gestion Commerciale', slug: 'bts-gestion-commerciale', description: '', parentId: mainPrograms.find(p => p.name === 'Brevet de Technicien Supérieur (BTS)')?.id, level: 'Bac +3', campus: 'Cocody Danga', langue: 'Français', rythm: 'Formation initiale', duration: '3 ans', thumbnail: '/media/uploads/vignettes/_licence-droit.jpg', cover: '/media/uploads/covers/licence-droit-cover.jpg', order: 1 },
    { name: 'BTS Finance Comptabilité & Gestion d\'Entreprises', slug: 'bts-finance-comptabilite-gestion-dentreprises', description: '', parentId: mainPrograms.find(p => p.name === 'Brevet de Technicien Supérieur (BTS)')?.id, level: 'Bac +3', campus: 'Cocody Danga', langue: 'Français', rythm: 'Formation initiale', duration: '3 ans', thumbnail: '/media/uploads/vignettes/_licence-professionnelle.jpg', cover: '/media/uploads/covers/licence-professionnelle-cover.jpg', order: 2 },

  ]);

  console.log("✅ Programs data migration completed successfully!");
  } catch (error) {}
}