import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => fileName.endsWith('.mdx'));
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getAllPostsData() {
  const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => fileName.endsWith('.mdx'));

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const lastModified = fs.statSync(fullPath).mtime;

    return {
      slug,
      data,
      content,
      lastModified,
    };
  });
}
