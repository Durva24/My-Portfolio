export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  tags: string[];
  createdAt: string;
  updatedAt: string;
  priority: 'low' | 'medium' | 'high';
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    name: 'Project 1',
    description: 'First project description - update with your actual project details',
    status: 'planning',
    tags: ['web', 'frontend'],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    priority: 'high',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project-1',
    liveUrl: 'https://project-1.netlify.app'
  },
  {
    id: 'project-2',
    name: 'Project 2',
    description: 'Second project description - update with your actual project details',
    status: 'in-progress',
    tags: ['mobile', 'app'],
    createdAt: '2024-02-01',
    updatedAt: '2024-02-15',
    priority: 'medium',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project-2'
  },
  {
    id: 'project-3',
    name: 'Project 3',
    description: 'Third project description - update with your actual project details',
    status: 'completed',
    tags: ['backend', 'api'],
    createdAt: '2024-03-01',
    updatedAt: '2024-03-30',
    priority: 'low',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project-3',
    liveUrl: 'https://api.project-3.com'
  },
  {
    id: 'project-4',
    name: 'Project 4',
    description: 'Fourth project description - update with your actual project details',
    status: 'on-hold',
    tags: ['fullstack', 'web'],
    createdAt: '2024-04-01',
    updatedAt: '2024-04-10',
    priority: 'medium',
    technologies: ['Next.js', 'Prisma', 'Supabase'],
    githubUrl: 'https://github.com/yourusername/project-4'
  },
  {
    id: 'project-5',
    name: 'Project 5',
    description: 'Fifth project description - update with your actual project details',
    status: 'planning',
    tags: ['ai', 'machine-learning'],
    createdAt: '2024-05-01',
    updatedAt: '2024-05-01',
    priority: 'high',
    technologies: ['Python', 'TensorFlow', 'FastAPI'],
    githubUrl: 'https://github.com/yourusername/project-5'
  }
];

// Helper functions for working with projects
export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find(project => project.id === id);
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return PROJECTS.filter(project => project.status === status);
};

export const getProjectsByTag = (tag: string): Project[] => {
  return PROJECTS.filter(project => project.tags.includes(tag));
};

export const getProjectsByPriority = (priority: Project['priority']): Project[] => {
  return PROJECTS.filter(project => project.priority === priority);
};

// Project statistics
export const PROJECT_STATS = {
  total: PROJECTS.length,
  completed: PROJECTS.filter(p => p.status === 'completed').length,
  inProgress: PROJECTS.filter(p => p.status === 'in-progress').length,
  planned: PROJECTS.filter(p => p.status === 'planning').length,
  onHold: PROJECTS.filter(p => p.status === 'on-hold').length
};

// All unique tags across projects
export const ALL_TAGS = Array.from(
  new Set(PROJECTS.flatMap(project => project.tags))
).sort();

// All unique technologies across projects
export const ALL_TECHNOLOGIES = Array.from(
  new Set(PROJECTS.flatMap(project => project.technologies))
).sort();