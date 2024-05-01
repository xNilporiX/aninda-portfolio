export interface IPost {
  title: string;
  subtitle: string;
  summary: string;
  content: string;
  author: string;
}
export interface WorkExperience {
  heading: string;
  chamonix: ExperienceDetails;
  enabled: ExperienceDetails;
  novatech: ExperienceDetails;
  dpdc: ExperienceDetails;
}

export interface ExperienceDetails {
  id: number;
  heading: string;
  position: string;
  location: string;
  summary: string;
  details: Record<string, string>;
  conclusion: string;
}
