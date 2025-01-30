'use server'
import { SignOut } from '@/components/signout-button'
import NavMenuItems from '@/components/made-components/navmenu';
import Link from 'next/link'
import { SignInWithGithub, SignInWithGoogle } from '@/components/made-components/signinbuttons';


import { auth } from '@/auth'

export default async function Header({ThemeButton}) {
    const session = await auth()
    return (
        <div className={`flex items-center justify-start top-0 sticky z-[99999999999]`}>
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
            <div>
                <ThemeButton/>
            </div>
            <div className="pr-2 lg:pr-10 my-2 ml-3">
                {!!session ? 
                <SignOut /> :
                <div><SignInWithGoogle/><SignInWithGithub/></div>
                // "frit"
                }
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


