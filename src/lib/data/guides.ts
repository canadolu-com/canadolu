import { GuideType } from '../types';

export type GuideCategory = {
  id: string;
  type: GuideType;
  title: string;
  description: string;
  iconName: string;
  color: string;
  slug: string;
};

export const guides: GuideCategory[] = [
  {
    id: '1',
    type: 'housing',
    title: "Housing Guide",
    description: "Find the perfect home in Canada - rental process, neighborhoods, and tips",
    iconName: "Home",
    color: "bg-orange-100 text-orange-600",
    slug: "housing-guide",
  },
  {
    id: '2',
    type: 'healthcare',
    title: "Healthcare System",
    description: "Understanding Canadian healthcare, insurance, and finding doctors",
    iconName: "Heart",
    color: "bg-red-100 text-red-600",
    slug: "healthcare-system",
  },
  {
    id: '3',
    type: 'education',
    title: "Education System",
    description: "Schools, universities, and educational opportunities",
    iconName: "GraduationCap",
    color: "bg-blue-100 text-blue-600",
    slug: "education-system",
  },
  {
    id: '4',
    type: 'employment',
    title: "Employment Guide",
    description: "Job search, work permits, and career development",
    iconName: "Briefcase",
    color: "bg-green-100 text-green-600",
    slug: "employment-guide",
  },
  {
    id: '5',
    type: 'transportation',
    title: "Transportation",
    description: "Public transit, driving licenses, and getting around",
    iconName: "Car",
    color: "bg-purple-100 text-purple-600",
    slug: "transportation",
  },
  {
    id: '6',
    type: 'banking',
    title: "Banking & Finance",
    description: "Banking system, credit, and financial management",
    iconName: "DollarSign",
    color: "bg-emerald-100 text-emerald-600",
    slug: "banking-and-finance",
  },
  {
    id: '7',
    type: 'immigration',
    title: "Immigration Process",
    description: "Visa types, permanent residency, and citizenship",
    iconName: "Globe",
    color: "bg-cyan-100 text-cyan-600",
    slug: "immigration-process",
  },
  {
    id: '8',
    type: 'culture',
    title: "Cultural Integration",
    description: "Canadian culture, customs, and social norms",
    iconName: "Book",
    color: "bg-pink-100 text-pink-600",
    slug: "cultural-integration",
  },
]; 