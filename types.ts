export interface ProductConfig {
  id: string;
  category: 'hardware' | 'storage' | 'software' | 'support' | 'cloud';
  name: string;
  description: string;
  price: number;
  highlight?: boolean;
}

export interface NavItem {
  text: string;
  link: string;
  active?: boolean;
}

export interface DocSection {
  id: string;
  title: string;
  content: React.ReactNode;
}