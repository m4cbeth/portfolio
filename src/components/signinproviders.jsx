'use server'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"
export async function SignInWithGithub() {
    return (
    <form action={async ()=> {
        'use server'
        await signIn('github')
    }}>
    <button type="submit"><FaGithub/>Sign In With Github</button>
    </form>
    )
  }
export async function SignInWithGoogle() {
    return (
    <form action={async ()=> {
        'use server'
        await signIn('google')
    }}>
    <button type="submit"><FaGoogle/>Sign In with Google</button>
    </form>
    )
  }