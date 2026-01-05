import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
}

export interface ComparisonPoint {
  feature: string;
  studio: string;
  gym: string;
}