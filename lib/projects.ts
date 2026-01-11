import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export interface ProjectMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  size: "1x1" | "1x2" | "2x1" | "2x2";
  visible: boolean;
  slug: string;
}

export async function getAllProjects(): Promise<ProjectMetadata[]> {
  const root = path.join(process.cwd(), "content", "projects");
  
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

  // Optional: Sort by date (Newest first)
  return projects.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}