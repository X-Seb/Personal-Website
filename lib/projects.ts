import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

// 1. Updated Interface with new fields
export interface ProjectMetadata {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  tags: string[];
  thumbnail: string;
  banner?: string;
  color?: string;
  role?: string;
  techStack?: string[];
  size: "1x1" | "1x2" | "2x1" | "2x2";
  visible: boolean;
  slug: string;
}

const root = path.join(process.cwd(), "content", "projects");

export async function getAllProjects(): Promise<ProjectMetadata[]> {
  if (!fs.existsSync(root)) return [];

  const files = fs.readdirSync(root).filter((file) => file.endsWith(".mdx"));
  const projects: ProjectMetadata[] = [];

  for (const file of files) {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(root, file);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { frontmatter } = await compileMDX<ProjectMetadata>({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    if (frontmatter.visible !== false) {
      projects.push({
        ...frontmatter,
        slug: slug,
      });
    }
  }

  // Sort by startDate (Newest first)
  return projects.sort((a, b) => (new Date(a.startDate) > new Date(b.startDate) ? -1 : 1));
}

export function formatDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.getTime() + userTimezoneOffset);
  
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
  // Only show day if the string is specific enough (YYYY-MM-DD)
  if (dateString.length > 7) options.day = "numeric"; 
  
  return new Intl.DateTimeFormat("en-US", options).format(adjustedDate);
}