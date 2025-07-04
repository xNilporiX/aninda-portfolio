import { Experience } from '../types/types';

export const experience: Experience = {
  heading: 'Work experience',
  chamonix: {
    id: 4,
    heading: 'Chamonix IT',
    position: 'Software Consultant',
    location: 'Adelaide, South Australia',
    summary:
      'As a Software Consultant, I specialize in creating great software applications, with a very high standard for quality. My expertise spans from development to operational improvement, with a strong emphasis on innovation and client satisfaction.',
    efficiency: 'Efficiency Boost:',
    oe: 'Operational Excellence:',
    leadership: 'Leadership:',
    development: 'Development:',
    details: {
      '1': 'Developed an internal website for data queries via Azure OpenAI.',
      '2': 'Created a health app to track vaccinations, advancing public health efforts.',
      '3': 'Launched a mobile app for tracking child development, praised for its user-friendly design.',
      '4': 'Led the migration to Microsoft Planner for HR management, aligning with strategic business goals.',
      '5': 'Streamlined software deployments using Azure Board pipelines.',
      '6': 'Established a backlog for application enhancements, tailoring solutions to evolving client needs.',
    },
    conclusion:
      'My approach integrates a deep understanding of technology with a commitment to continuous improvement, driving forward projects that exceed client expectations',
  },
  enabled: {
    id: 3,
    heading: 'Enabled Solutions',
    position: 'Junior Developer',
    location: 'Adelaide, South Australia',
    summary:
      'As a Junior Programmer, I collaborated closely with the manager on PHP and Symfony applications, enhancing system robustness and client satisfaction. I also integrated advanced features using React and TypeScript, led projects, and managed client interactions to improve project outcomes.',
    details: {
      '1': 'Collaborated closely with the manager on PHP and Symfony applications, fortifying a resilient system that ensured consistent client stability and satisfaction.',
      '2': 'Developed on the integration of innovative functionalities into company projects, leveraging React and Typescript to enhance user experiences and project capabilities significantly.',
      '3': 'Drove multiple projects to success, taking charge of direct client interactions, proficiently managing, and resolving their tickets in collaboration with the manager.',
      '4': 'Fostered deeper client relationships and a comprehensive understanding of their needs, contributing to the continuous improvement of project outcomes.',
    },
    conclusion:
      'My efforts have consistently fostered stronger client relationships and driven the success of numerous software development projects.',
  },
  novatech: {
    id: 2,
    heading: 'Novatech Creative Event Technology',
    position: 'IT Helpdesk intern',
    location: 'Adelaide, South Australia',
    summary:
      'As an IT Helpdesk Intern, I enhanced Windows 11 systems, optimized IT processes, and developed software solutions, boosting productivity and financial accuracy by 40%. I also improved asset management using Microsoft 365 tools, significantly aiding IT service tasks.',
    details: {
      '1': 'Evaluated user-experience on Windows 11, creating Windows 11 Pro image using Microsoft Deployment Toolkit and optimising Active Directory Group Policy Objects.',
      '2': 'Conducted hardware stress tests, performance benchmarking, and suitability testing for newly imaged machines, documenting changes.',
      '3': 'Developed a time tracking software flow for precise client project hour billing improving business productivity and financial accuracy by 40%.',
      '4': 'Implemented Microsoft 365 tools like SharePoint Lists and Power Automate Flow for asset management, facilitating IT servicing tasks and enhancing asset identification for the helpdesk department.',
    },
    conclusion:
      'My internship has greatly contributed to improving system efficiency and accuracy in project and asset management, demonstrating significant enhancements in IT operations and client service deliverables.',
  },
  dpdc: {
    id: 1,
    heading: 'Dhaka Power Distribution Company (DPDC)',
    position: 'Cybersecurity intern',
    location: 'Dhaka, Bangladesh',
    summary:
      "As a Cybersecurity Intern at DPDC, I enhanced system security through detailed vulnerability reports and preventive measures. I deepened my knowledge of global cyber threats, contributing to strengthened defenses against attacks targeting the power sector. My work significantly improved DPDC's cybersecurity readiness.",
    details: {
      '1': 'Collaborated with the system administrator, using Linux for system maintenance.',
      '2': 'Crafted a comprehensive report addressing the Apache log4j vulnerability, contributing significantly to raising awareness and preventing potential vulnerabilities.',
      '3': 'Acquired in-depth knowledge regarding prevalent global cyber-attacks, fostering an enhanced understanding of threat landscapes.',
      '4': "Delivered a compelling presentation on common cyber-attacks targeting power sectors worldwide, actively supporting the team in fortifying DPDC's networks and services against potential threats.",
    },
    conclusion:
      'My experience was instrumental in bolstering cybersecurity measures, increasing awareness of vulnerabilities, and enhancing the overall security posture against emerging global threats in the energy industry.',
  },
};
