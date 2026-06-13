import { NextResponse } from 'next/server';

const mockProjects = [
  { id: '1', title: 'Cyberpunk Cityscape', category: 'Environment Design', tools: ['Maya', 'Unreal Engine'] },
  { id: '2', title: 'Mecha Character Rig', category: 'Character Animation', tools: ['Blender', 'Substance Painter'] },
  { id: '3', title: 'Product Visualization', category: 'Motion Graphics', tools: ['Cinema 4D', 'Redshift'] },
  { id: '4', title: 'Fantasy Creature', category: 'Creature Design', tools: ['ZBrush', 'Maya'] },
  { id: '5', title: 'Abstract Loop', category: 'Motion Graphics', tools: ['Blender', 'After Effects'] },
  { id: '6', title: 'Sci-Fi Weapon', category: 'Hard Surface Modeling', tools: ['Maya', 'Substance Painter'] },
];

export async function GET() {
  return NextResponse.json({ projects: mockProjects });
}
