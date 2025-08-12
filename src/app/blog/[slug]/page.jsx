// app/blog/[slug]/page.js
import { notFound } from 'next/navigation'
import matter from 'gray-matter'
import { readFileSync } from 'fs'
import { join } from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { getAllPosts } from '@/lib/getAllPosts'


async function getBlogPost(slug) {
  try {
    const filePath = join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`)
    const fileContent = readFileSync(filePath, 'utf8')
    const { data: frontmatter, content } = matter(fileContent)
    
    const { content: mdxContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: false }
    })

    return { frontmatter, content: mdxContent }
  } catch {
    return null
  }
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
    }
  }
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug)
  if (!post) {notFound()}

const posts = getAllPosts()
const index = posts.findIndex(p => p.slug === params.slug)

const prevPost = index < posts.length -1 ? posts[index + 1] : null
const nextPost = index > 0 ? posts[index - 1] : null


  const displaydate = post.frontmatter.date
    ? new Date(post.frontmatter.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
        <p className="text-gray-600 mb-2">{post.frontmatter.description}</p>
        <time className="text-sm text-gray-500">{displaydate}</time>
        {post.frontmatter.tags && (
          <div className="mt-4 flex gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>

      <nav className="mt-12 grid grid-cols-3 items-center">
        <div className="justify-self-start">
          {prevPost && (
            <a
              href={`/blog/${prevPost.slug}`}
              className="text-blue-600 hover:underline"
            >
              ← {prevPost.frontmatter.title}
            </a>
          )}
        </div>

        <div className="justify-self-center">
          <a href="/blog" className="text-blue-600 hover:underline">
            Blog Home
          </a>
        </div>

        <div className="justify-self-end">
          {nextPost && (
            <a
              href={`/blog/${nextPost.slug}`}
              className="text-blue-600 hover:underline"
            >
              {nextPost.frontmatter.title} →
            </a>
          )}
        </div>
      </nav>
      
    </article>
  )
}