import Link from 'next/link'

export default async function Projects() {
    return (
        <div>
            <div>
                Hello Projects
            </div>
            <div>
                <Link href="/projects/hiragana">Hiragana</Link>
            </div>
        </div>
    )
}