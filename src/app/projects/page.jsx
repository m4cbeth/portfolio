import Link from 'next/link'
import Head from 'next/head'


export default async function Projects() {
    return (
        <div className="container mx-auto">
            <Head>
                <title>Hello Projects</title>
            </Head>
              <h1 className="text-5xl font-black pt-3">
                projects
            </h1>
            <h2 className=" font-thin text-3xl pb-5">
                Things I've Built
            </h2>
            <div>
                <Link href="/projects/hiragana">Hiragana</Link>
            </div>
        </div>
    )
}