import Link from 'next/link'
import SignInButton from '@/components/made-components/signinbutton'
import { SignOut } from '@/components/signout-button'

import { auth } from '@/auth'

export default async function Header() {
    const session = await auth()
    return (
        <div className={`flex items-center justify-start top-0 sticky bg-black dark:bg-white z-[99999999999]`}>
            <Link className='no-underline  pr-2 lg:pr-5 lg:pl-5' href="/">
                <div className="font-extralight text-3xl hover:text-secondary transition ease-out pb-2">
                    JW
                </div>
            </Link>
            <div className="flex-1 pb-2 ">
                <div className="md:inline-block hidden">
                    <NavMenuItems/>
                </div>
            </div>
            {/* gggggg */}
            <div className="pr-2 lg:pr-10 my-2 ml-3">
                {!!session ? 
                <SignOut /> :
                <SignInButton />}
            </div>
            <div>
                {!!session ?
                <img className='rounded-full mr-5' src={session.user.image} width={50} height={50} alt={session.user.name}/> :
                ""
                }
            </div>
        </div>
    )
}


const NavMenuItems = () => (
    <div className="md:pb-0 text-nowrap">
        <Link href="/"        className="no-underline text-lg md:text-lg hover:text-accent">HOME</Link > &nbsp;| &nbsp;
        <Link href="/about"   className="no-underline text-lg md:text-lg hover:text-accent">ABOUT</Link > &nbsp;| &nbsp;
        <Link href="/projects"   className="no-underline text-lg md:text-lg hover:text-accent">PROJECTS</Link > &nbsp;| &nbsp;
        <Link href="/contact" className="no-underline text-lg md:text-lg hover:text-accent">CONTACT</Link >
    </div>
)
