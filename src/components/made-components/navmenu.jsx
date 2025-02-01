import Link from 'next/link'
import { RiToolsLine } from "react-icons/ri";
import { RiHomeLine } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { Separator } from '@/components/ui/separator';


export default async function NavMenuItems(){
    return (
        <div className="md:pb-0 text-nowrap ">
            <Link href="/"        className="no-underline text-lg md:text-lg hover:text-accent">HOME</Link > &nbsp;| &nbsp;
            <Link href="/about"   className="no-underline text-lg md:text-lg hover:text-accent">ABOUT</Link > &nbsp;| &nbsp;
            <Link href="/projects"   className="no-underline text-lg md:text-lg hover:text-accent">PROJECTS</Link > &nbsp;| &nbsp;
            <Link href="/contact" className="no-underline text-lg md:text-lg hover:text-accent">CONTACT</Link >
        </div>
    )
} 

export async function BottomNav() {
    const navItems = [
        {name: "Home", path: "/", icon: <RiHomeLine  /> },
        {name: "Projects", path: "/projects", icon: <RiToolsLine  /> },
        {name: "About", path: "/about", icon: <RiInformationLine   /> },
        {name: "Contact", path: "/contact", icon: <RiMailLine    /> },
    ]
    return (
        <div className="md:pb-0 text-nowrap flex flex-row gap-5">
            {navItems.map((item, index) => (
                <>
                    <Link href={item.path} key={item.name+index} className='flex flex-col justify-center'>
                        <div className='flex justify-center'>{item.icon}</div>
                        <div className="">{item.name}</div>
                    </Link>
                    {index < navItems.length-1 ? <Separator key={`sep${index}`} orientation='vertical'/> : ""}
                </>
            ))}
        </div>

    )
}