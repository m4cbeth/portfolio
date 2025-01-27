'use server'
import { signIn, auth } from '../../auth'

async function githubSignIn() {
  'use server'
  await signIn('github')
}

async function googleSignIn() {
  'use server'
  await signIn('google')
}

function SignInWithGithub() {
  return (
    <form action={githubSignIn}>
      <button type='submit'>Sign in with Github</button>
    </form>
  )
}

function SignInWithGoogle() {
  return (
    <form action={googleSignIn}>
      <button type='submit'>Sign in with Google</button>
    </form>
  )
}

export default async function Home() {
  const session = await auth()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <pre>{JSON.stringify(session,0,8)}</pre>
          <SignInWithGithub/>
          <SignInWithGoogle/>
        </div>
      </main>
    </div>
  )
}