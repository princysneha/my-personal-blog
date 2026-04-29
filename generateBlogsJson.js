import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = path.join(__dirname, 'public', 'blogs');
const outputFile = path.join(blogsDir, 'blogs.json');

const blogFiles = fs.readdirSync(blogsDir).filter(file => file.endsWith('.md'));

const blogs = blogFiles.map(file => {
  const filePath = path.join(blogsDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);
  return {
    id: file.match(/\d+/)[0],
    title: data.title || file,
    date: data.date || '',
    summary: data.summary || '',
  };
});

fs.writeFileSync(outputFile, JSON.stringify(blogs, null, 2));
console.log('blogs.json generated!');