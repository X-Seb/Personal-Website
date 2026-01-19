import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export interface ArticleMetadata {
  title: string;
  description: string;
  publishedDate: string; 
  tags: string[];
  thumbnail?: string;
  banner?: string;
  color?: string;
  visible?: boolean;
  slug: string;
}

const root = path.join(process.cwd(), "content", "articles");

export async function getAllArticles(): Promise<ArticleMetadata[]> {
  if (!fs.existsSync(root)) return [];

  const files = fs.readdirSync(root).filter((file) => file.endsWith(".mdx"));
  const articles: ArticleMetadata[] = [];

  for (const file of files) {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(root, file);

    try {
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { frontmatter } = await compileMDX<ArticleMetadata>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });

      if (frontmatter.visible !== false) {
        articles.push({
          ...frontmatter,
          slug: slug,
        });
      }
    } catch (error) {
      console.error(`❌ Error parsing Article "${file}":`, error);
    }
  }

  return articles.sort((a, b) => (new Date(a.publishedDate) > new Date(b.publishedDate) ? -1 : 1));
}