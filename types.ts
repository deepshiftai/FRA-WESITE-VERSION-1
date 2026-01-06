
export interface Program {
  id: string;
  title: string;
  focus: string;
  objective: string;
  description: string;
  subAreas: string[];
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Healthy Diets' | 'Equitable Production' | 'Food Governance' | 'Target Initiatives';
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  image: string;
  summary: string;
  impact: string;
  fullDescription: string;
  location: string;
  duration: string;
  partners?: string[];
}

export interface BoardMember {
  name: string;
  designation: string;
  function: string;
  image: string;
}

export interface SecretariatMember {
  name: string;
  designation: string;
  image: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  fullContent?: string;
  category: 'Advocacy' | 'Policy' | 'Events' | 'Research' | 'Institutional';
}

export interface MetricData {
  region: string;
  population: string;
  driver: string;
  outlook: string;
}

export interface Partner {
  type: string;
  organizations: string;
  function: string;
}
