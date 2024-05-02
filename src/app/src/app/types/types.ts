export interface IPost {
  title: string;
  subtitle: string;
  summary: string;
  content: string;
  author: string;
}
export interface Experience {
  heading: string;
  chamonix: JobDetails;
  enabled: JobDetails;
  novatech: JobDetails;
  dpdc: JobDetails;
};

export interface JobDetails {
  id: number;
  heading: string;
  position: string;
  location: string;
  summary: string;
  efficiency?: string;
  oe?: string;
  leadership?: string;
  development?: string;
  details: { [key: string]: string };
  conclusion: string;
}
