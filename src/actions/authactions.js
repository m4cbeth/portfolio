'use server'
import { signIn } from "@/auth"
export async function githubSignInAction() {
  await signIn('github')
}
export async function googleSignInAction() {
  await signIn('google')
}