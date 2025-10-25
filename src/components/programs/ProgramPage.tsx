import type { ProgramsStructure } from '@/drizzle/schema';
import { BTSLayout } from './layouts/BTSLayout';
import { VAELayout } from './layouts/VAELayout';

type Props = {
  program: ProgramsStructure;
};

// Function to get the appropriate layout based on the program hierarchy
function getLayoutForProgram(program: ProgramsStructure) {
  // If it's a subprogram, check its parent's name to determine the layout
  if (program.parentId && program.parent) {
    const parentName = program.parent.name.toLowerCase();
    if (parentName.includes('bts')) return 'BTS';
    if (parentName.includes('vae') || parentName.includes('vap')) return 'VAE';
    // Add more conditions for other program types
  }
  
  // If it's a main program, check its own name
  const programName = program.name.toLowerCase();
  if (programName.includes('bts')) return 'BTS';
  if (programName.includes('vae') || programName.includes('vap')) return 'VAE';
  // Add more conditions for other program types
  
  // Default to BTSLayout if no match (you might want to create a default layout instead)
  return 'BTS';
}

export default function ProgramPage({ program }: Props) {
  const layoutType = getLayoutForProgram(program);
  console.log('Layout selected:', layoutType, 'for program:', program);
  
  switch (layoutType) {
    case 'VAE':
      return <VAELayout program={program} />;
    case 'BTS':
    default:
      return <BTSLayout program={program} />;
  }
}