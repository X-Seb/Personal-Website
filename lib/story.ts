export type StoryType = "work" | "education" | "personal";

export interface StoryItem {
  startDate: string;      // "YYYY-MM"
  endDate?: string;       // "YYYY-MM" or "Present"
  title: string;
  organization: string;
  location: string;
  description: string;    // one-sentence summary
  responsibilities: string[];
  skills: string[];
  type: StoryType;
}

export const STORY_ITEMS: StoryItem[] = [
  {
    startDate: "2025-06",
    endDate: "Present",
    title: "Founder & CEO",
    organization: "Silent Stacks",
    location: "Montreal, QC",
    type: "work",
    description: "Developing custom AI agents to automate complex B2B workflows and improve operational efficiency.",
    responsibilities: [
      "Developing custom AI agents to automate complex B2B workflows.",
      "Leading all business functions, including product development, marketing strategy, and sales outreach."
    ],
    skills: ["AI Agents", "B2B Sales", "Product Management", "n8n"]
  },
  {
    startDate: "2025-08",
    endDate: "2029-05",
    title: "B.Eng in Electrical Engineering",
    organization: "Polytechnique Montréal",
    location: "Montreal, QC",
    type: "education",
    description: "Specializing in robotics and embedded systems.",
    responsibilities: [],
    skills: ["Electrical Engineering", "Embedded Systems"]
  },
  {
    startDate: "2025-05",
    endDate: "2025-08",
    title: "Sales and Marketing Associate",
    organization: "Robots Montreal",
    location: "Montreal, QC",
    type: "work",
    description: "Driving business growth through targeted outreach in the restaurant robotics sector.",
    responsibilities: [
      "Generated business leads through targeted outreach campaigns to prospects.",
      "Organized niche networking events to foster industry connections and promote brand visibility."
    ],
    skills: ["Cold Outreach", "Event Planning", "Sales", "Networking"]
  },
  {
    startDate: "2023-05",
    endDate: "2025-05",
    title: "Robotics Team Captain",
    organization: "Vanier Robotics",
    location: "Montreal, QC",
    type: "work",
    description: "Led a massive team of 100+ students to podium finishes at the CRC Robotics Competition.",
    responsibilities: [
      "Overseeing team operations, managing meetings, and coordinating competition logistics for 100+ members.",
      "Placed 2nd and 3rd at the CRC Robotics Competition.",
      "Formed partnerships with local businesses, raising $12,000+ in sponsor capital.",
      "Built, programmed, and tested a motorized robot; created a website and short film."
    ],
    skills: ["Leadership", "Robotics", "Fundraising", "Conflict Resolution"]
  },
  {
    startDate: "2023-08",
    endDate: "2025-05",
    title: "D.E.C. Pure and Applied Science",
    organization: "Vanier College",
    location: "Montreal, QC",
    type: "education",
    description: "Graduated with Dean's Honour List (90%+ average)",
    responsibilities: [
      "Awarded 3 S.T.A.R. certificates for completing 180+ hours of volunteer work.",
      "Dean’s Honour List student."
    ],
    skills: ["Physics", "Calculus", "Chemistry", "Volunteer Work"]
  },
  {
    startDate: "2023-05",
    endDate: "2023-08",
    title: "Research Assistant & Web Developer",
    organization: "Polytechnique (LM2 Laboratory)",
    location: "Montreal, QC",
    type: "work",
    description: "Improving accessibility to research through web development and assisting with lab operations.",
    responsibilities: [
      "Developed a WordPress website for the LM2 lab, attracting 200+ monthly visitors.",
      "Gained hands-on experience with 3D printing and lab tools by assisting researchers."
    ],
    skills: ["WordPress", "Web Dev", "3D Printing", "Research Ops"]
  },
  {
    startDate: "2022-08",
    endDate: "2023-06",
    title: "High School Diploma",
    organization: "Athens Drive Magnet High School",
    location: "Raleigh, NC",
    type: "education",
    description: "Rank 1 of 435 students (Junior Valedictorian) with a weighted GPA of 4.75.",
    responsibilities: [
      "Summa Cum Laude (Highest student rank possible).",
      "Scored 5/5 on all 4 AP exams; received AP Scholar with Honor Award."
    ],
    skills: ["Academic Excellence", "Adaptability", "Mathematics", "Computer Science"]
  },
  {
    startDate: "2022-08",
    endDate: "Present",
    title: "Content Creator",
    organization: "Self-Employed (YouTube)",
    location: "Remote",
    type: "personal",
    description: "Producing educational content about game development and engineering.",
    responsibilities: [
      "Produced 15+ videos about game development, reaching 18,000+ views and 370+ subscribers.",
      "Improved average view duration by optimizing scripts, editing, and branding."
    ],
    skills: ["Video Editing", "DaVinci Resolve", "Writing", "SEO", "Branding"]
  },
  {
    startDate: "2022-08",
    endDate: "2025-01",
    title: "Indie Game Developer",
    organization: "Self-Employed",
    location: "Remote",
    type: "personal",
    description: "Designed, programmed, and released 6 games using the Unity Game Engine.",
    responsibilities: [
      "Released 6 games reaching over 2,000 players with a 4.5+ average rating.",
      "Composed music, edited visual assets, and independently handled publishing."
    ],
    skills: ["Unity", "C#", "Game Design", "Music Composition", "3D Modeling"]
  },
  {
    startDate: "2018-08",
    endDate: "2022-06",
    title: "High School Diploma",
    organization: "Collège Notre-Dame",
    location: "Montreal, QC",
    type: "education",
    description: "Consistent academic excellence in a competitive environment.",
    responsibilities: [
      "Received the Prix du Méritas Scolaire every year for maintaining an 80+ average in each class."
    ],
    skills: ["Discipline", "Focus", "Self-Confidence", "Core Knowledge"]
  }
];