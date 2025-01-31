import { githubSignInAction, googleSignInAction } from '@/actions/authactions'
import { Button } from '../ui/button';
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"

export function SignInWithGithub() {
    return (
        <form className='w-full' action={githubSignInAction}>
            <Button className='w-full' variant="outline" type='submit'><FaGithub/>Sign in with Github</Button>
        </form>
    )
}

export function SignInWithGoogle() {
    return (
        <form className='w-full' action={googleSignInAction}>
            <Button className='w-full' variant="outline" type='submit'><FaGoogle/>Sign in with Google</Button>
        </form>
    )
}
