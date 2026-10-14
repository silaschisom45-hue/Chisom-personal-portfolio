export type Project = {
  title: string
  description: string
  link?: string
}

export const profile = {
  name: 'Alagbaoso Silas Chisom',
  headline:
    'Computer Science graduate studying Leadership and Project Management in IT at NAIT.',
  location: 'Edmonton, Canada',
  interests: ['Technology', 'Project Planning', 'Cybersecurity', 'Web Development'],
  // Add your contact link here (e.g. "mailto:you@example.com" or a LinkedIn URL).
  contactUrl: '',
}

// Replace these placeholders with your project details.
export const projects: Project[] = [
  { title: 'Project One', description: 'Project details coming soon.' },
  { title: 'Project Two', description: 'Project details coming soon.' },
  { title: 'Project Three', description: 'Project details coming soon.' },
]
