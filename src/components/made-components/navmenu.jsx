import Link from 'next/link'

export default async function NavMenuItems(){
    'use server'
    return (
        <div className="md:pb-0 text-nowrap">
            <Link href="/"        className="no-underline text-lg md:text-lg hover:text-accent">HOME</Link > &nbsp;| &nbsp;
            <Link href="/about"   className="no-underline text-lg md:text-lg hover:text-accent">ABOUT</Link > &nbsp;| &nbsp;
            <Link href="/projects"   className="no-underline text-lg md:text-lg hover:text-accent">PROJECTS</Link > &nbsp;| &nbsp;
            <Link href="/contact" className="no-underline text-lg md:text-lg hover:text-accent">CONTACT</Link >
        </div>
    )
} 
