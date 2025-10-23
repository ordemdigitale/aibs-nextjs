import { BTSLayout } from './BTSLayout';
import { BachelorLayout } from './BachelorLayout';
import { LicenceDroitLayout } from './LicenceDroitLayout';
import { LicenceProLayout } from './LicenceProLayout';
import { MasterProLayout } from './MasterProLayout';
import { MBALayout } from './MBALayout';
import { VAELayout } from './VAELayout';
import { BourseChineLayout } from './BourseChineLayout';
import type { ProgramsStructure } from '@/drizzle/schema';

type Props = {
  program: ProgramsStructure;
};

export function ProgramLayout({ program }: Props) {
  // Map program names to their specific layouts
  switch (program.name) {
    case 'Brevet de Technicien Supérieur (BTS)':
      return <BTSLayout program={program} />;
    case 'Bachelor':
      return <BachelorLayout program={program} />;
    case 'Licence de Droit':
      return <LicenceDroitLayout program={program} />;
    case 'Licence Professionnelle':
      return <LicenceProLayout program={program} />;
    case 'Master Professionnel':
      return <MasterProLayout program={program} />;
    case 'MBA':
      return <MBALayout program={program} />;
    case 'VAE / VAP':
      return <VAELayout program={program} />;
    case 'Bourse d\'étude en Chine':
      return <BourseChineLayout program={program} />;
    default:
      // Default to BTSLayout if no specific layout is found
      return <BTSLayout program={program} />;
  }
}