import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function getAllPosts() {
  const dir = join(process.cwd(), 'src', 'content', 'blog')
  return readdirSync(dir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '')
      const fileContent = readFileSync(join(dir, file), 'utf8')
      const { data: frontmatter } = matter(fileContent)

      return {
        slug,
        frontmatter,
        displayDate: frontmatter.date
          ? new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : '',
      }
    })
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
}
