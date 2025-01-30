import { githubSignInAction, googleSignInAction } from '@/actions/authactions'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"

export function SignInWithGithub() {
    return (
        <form action={githubSignInAction}>
            <button type='submit'><FaGithub/>Sign in with Github</button>
        </form>
    )
}

export function SignInWithGoogle() {
    return (
        <form action={googleSignInAction}>
            <button type='submit'><FaGoogle/>Sign in with Google</button>
        </form>
    )
}
