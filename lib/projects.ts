import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export type ProjectStatus = 
  | "Completed" 
  | "In Progress" 
  | "Terminated" 
  | "Not Started" 
  | "Passive" 
  | "Delegated";

export const StatusColors: Record<ProjectStatus, string> = {
  "Completed": "bg-green-500/10 text-green-400 border-green-500/20",
  "In Progress": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Terminated": "bg-red-500/10 text-red-400 border-red-500/20",
  "Not Started": "bg-neutral-500/10 text-neutral-400 border-neutral-500/20",
  "Passive": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Delegated": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export interface ProjectMetadata {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  tags: string[];
  techStack?: string[];
  status?: ProjectStatus;
  role?: string;
  thumbnail: string;
  banner?: string;
  color?: string;
  visible?: boolean;
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

    try {
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
    } catch (error) {
      console.error(`❌ Error parsing MDX file "${file}":`, error);
    }
  }
  return projects.sort((a, b) => (new Date(a.startDate) > new Date(b.startDate) ? -1 : 1));
}

export function formatDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.getTime() + userTimezoneOffset);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
  if (dateString.length > 7) options.day = "numeric"; // show day
  
  return new Intl.DateTimeFormat("en-US", options).format(adjustedDate);
}