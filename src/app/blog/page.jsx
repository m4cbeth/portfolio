
// app/blog/page.js
import Link from 'next/link'
import matter from 'gray-matter'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

async function getAllPosts() {
  const contentDir = join(process.cwd(), 'src', '', '',  'content', 'blog')
  const files = readdirSync(contentDir).filter(file => file.endsWith('.mdx'))

  const posts = files.map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const filePath = join(contentDir, file)
    const fileContent = readFileSync(filePath, 'utf8')
    const { data: frontmatter } = matter(fileContent)

    return { slug, frontmatter }
  })

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-1">
        Blog Posts
      </h1>
      <h2 className='mb-8 font-thin'>
        Come on in and read some of my past.
      </h2>

      <div className="space-y-6">
        {/* posts = <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        {posts.map(post => (
          <article key={post.slug} className="border-b pb-6">
            <Link href={`/blog/${post.slug}`} className="block hover:opacity-80">
              <h2 className="text-2xl font-semibold mb-2">{post.frontmatter.title}</h2>
              <p className="text-gray-600 mb-2">{post.frontmatter.description}</p>
              <time className="text-sm text-gray-500">{post.frontmatter.date}</time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
