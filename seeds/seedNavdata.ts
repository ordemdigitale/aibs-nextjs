// seeds/seedNavdata.ts
// Seed script to populate the navigation table with initial data
import { db } from "@/drizzle/db";
import { navLinks, subLinks, nestedLinks } from "@/drizzle/schema";

export async function migrateNavData() {
  try {
    // Insert main navigation links
    const mainNavs = await db.insert(navLinks).values([
      { name: "L'école", slug: '#', order: 1 },
      { name: "Programmes", slug: "#", order: 2 },
      { name: "Bibliothèque numérique", slug: "https://promo-ci.youscribe.com/pysci/lp_service_gen?utm_source=youscribe&utm_medium=others&utm_campaign=HP", order: 3 },
      { name: "E-Learning", slug: "https://myschool.atlantique-ibs.net/", order: 4 }
    ]).returning();

    // Find the IDs for our main nav items
    const lecoleId = mainNavs.find(nav => nav.name === "L'école")?.id;
    const programmesId = mainNavs.find(nav => nav.name === "Programmes")?.id;

    if (!lecoleId || !programmesId) {
      throw new Error("Failed to retrieve main navigation IDs")
    }

    // Insert sub-links for "L'école"
    const lecoleSubLinks = await db.insert(subLinks).values([
      { name: "Découvrez AIBS", slug: "decouvrez-aibs", parentId: lecoleId, order: 1 },
      { name: "Système Qualité", slug: "systeme-qualite", parentId: lecoleId, order: 2 },
      { name: "Demande de document", slug: "demande-de-document", parentId: lecoleId, order: 3 },
      { name: "Demande de vacation", slug: "demande-de-vacation", parentId: lecoleId, order: 4 },
      { name: "Demande de stagiaire", slug: "demande-de-stagiaire", parentId: lecoleId, order: 5 }
    ]).returning();

    // Find IDs for nested links
    const decouvrezAibsId = lecoleSubLinks.find(sub => sub.name === "Découvrez AIBS")?.id;
    const systemeQualiteId = lecoleSubLinks.find(sub => sub.name === "Système Qualité")?.id;

    if (!decouvrezAibsId || !systemeQualiteId) {
      throw new Error("Failed to create sub-links");
    }

    // Insert nested links for "Découvrez AIBS"
    await db.insert(nestedLinks).values([
      { name: "Mot du PDG", slug: "mot-du-pdg", parentId: decouvrezAibsId!, order: 1 },
      { name: "Présentation", slug: "presentation", parentId: decouvrezAibsId!, order: 2 },
      { name: "Points forts", slug: "points-forts", parentId: decouvrezAibsId!, order: 3 }
    ]);

    // Insert nested links for "Système Qualité"
    await db.insert(nestedLinks).values([
      { name: "Notre Politique Qualité", slug: "notre-politique-qualite", parentId: systemeQualiteId!, order: 1 },
      { name: "Satisfaction Client", slug: "satisfaction-client", parentId: systemeQualiteId!, order: 2 },
    ]);

    // Insert sub-links for "Programmes"
    const progSubLinks = await db.insert(subLinks).values([
      { name: "Brevet de Technicien Supérieur (BTS)", slug: "bts", parentId: programmesId, order: 1 },
      { name: "Bachelor", slug: "bachelor", parentId: programmesId, order: 2 },
      { name: "Licence de Droit", slug: "licence-de-droit", parentId: programmesId, order: 3 },
      { name: "Licence Professionnelle", slug: "licence-professionnelle", parentId: programmesId, order: 4 },
      { name: "Master Professionnel", slug: "master-professionnel", parentId: programmesId, order: 5 },
      { name: "MBA", slug: "mba", parentId: programmesId, order: 6 },
      { name: "Bourse d'étude en Chine", slug: "bourse-detude-en-chine", parentId: programmesId, order: 7 },
      { name: "VAE / VAP", slug: "vae-vap", parentId: programmesId, order: 8 }
    ]).returning();
    // Find IDs for Programme's nested links
    const btsId = progSubLinks.find(nested => nested.slug === "bts")?.id;
    const licenceproId = progSubLinks.find(nested => nested.slug === "licence-professionnelle")?.id;
    const masterproId = progSubLinks.find(nested => nested.slug === "master-professionnel")?.id;
    const mbaId = progSubLinks.find(nested => nested.slug === "mba")?.id;
    const vaevapId = progSubLinks.find(nested => nested.slug === "vae-vap")?.id;

    if (!btsId || !licenceproId || !masterproId || !mbaId || !vaevapId) {
      throw new Error("Failed to create nested links");
    }
    // Insert Programmes nested links (BTS, Licence Pro, Master Pro, MBA, VAE/VAP)
    await db.insert(nestedLinks).values([
      // BTS
      { name: "BTS Gestion Commerciale", slug: "bts-gestion-commerciale", parentId: btsId, order: 1 },
      { name: "BTS Finance Comptabilité & Gestion d'Entreprises", slug: "bts-finance-comptabilite-gestion-dentreprises", parentId: btsId, order: 2 },
      { name: "BTS Informatique: Développeur d'Application", slug: "bts-informatique-developpeur-dapplication", parentId: btsId, order: 3 },
      { name: "BTS Ressources Humaines & Communication", slug: "bts-ressources-humaines-communication", parentId: btsId, order: 4 },
      { name: "BTS Transport & Logistique", slug: "bts-transport-logistique", parentId: btsId, order: 5 },
      // Licence Pro
      { name: "Audit & Contrôle de Gestion", slug: "audit-controle-de-gestion", parentId: licenceproId, order: 1 },
      { name: "Banque & Assurance", slug: "banque-assurance", parentId: licenceproId, order: 2 },
      { name: "Gestion des Ressources Humaines", slug: "gestion-des-ressources-humaines", parentId: licenceproId, order: 3 },
      { name: "Informatique", slug: "informatique", parentId: licenceproId, order: 4 },
      { name: "Marketing - Management", slug: "marketing-management", parentId: licenceproId, order: 5 },
      { name: "Transport - Logistique", slug: "transport-logistique", parentId: licenceproId, order: 6 },
      // Master Pro
      { name: "Achats & Approvisionnements", slug: "achats-approvisionnements", parentId: masterproId, order: 1 },
      { name: "Audit & Finance d'Entreprise", slug: "audit-finance-dentreprise", parentId: masterproId, order: 2 },
      { name: "Contrôle de Gestion et Audit Organisationnel", slug: "controle-de-gestion-et-audit-organisationnel", parentId: masterproId, order: 3 },
      { name: "Management Opérationnel et Stratégique", slug: "management-opérationnel-et-stratégique", parentId: masterproId, order: 4 },
      { name: "Management des Projets et de l'Innovation", slug: "management-des-projets-et-de-linnovation", parentId: masterproId, order: 5 },
      { name: "Management des Ressources Humaines", slug: "management-des-ressources-humaines", parentId: masterproId, order: 6 },
      { name: "Management des Systèmes d'Informations", slug: "management-des-systèmes-dinformations", parentId: masterproId, order: 7 },
      { name: "Marketing & Stratégie Digitale", slug: "marketing-stratégie-digitale", parentId: masterproId, order: 8 },
      { name: "Supply Chain Management", slug: "supply-chain-management", parentId: masterproId, order: 9 },
      // MBA
      { name: "Global MBA", slug: "global-mba", parentId: mbaId, order: 1 },
      { name: "MBA Data Science & Intelligence Artificielle", slug: "mba-data-science-intelligence-artificielle", parentId: mbaId, order: 2 },
      { name: "MBA Management des Ressources Humaines", slug: "mba-management-des-ressources-humaines", parentId: mbaId, order: 3 },
      { name: "MBA Santé Sécurité Environnement", slug: "mba-sante-sécurite-environnement", parentId: mbaId, order: 4 },
      // VAE/VAP
      { name: "Licence", slug: "licence", parentId: vaevapId, order: 1 }
    ]);

    console.log("✅ Navigation data migration completed successfully!");
  } catch (error) {
    console.error("❌ Pages data migration failed:", error);
    throw error;
  }
}