import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  specs: string[];
  icon: LucideIcon;
  details: {
    bestFor: string;
    role: string;
    highlights: string[];
  };
}

export interface TimelineStep {
  id: number;
  title: string;
  shortDesc: string;
  details: string;
  params?: string; // Optional generic params
}

export interface RecoveryTab {
  id: 'dust' | 'intermediate' | 'final' | 'used_bath';
  label: string;
  icon: LucideIcon;
}
