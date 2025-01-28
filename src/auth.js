import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Instagram from "next-auth/providers/instagram"
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'


export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: false,
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google, Instagram],
  trustHost: true,
  trustedHosts: [
    'https://jarenwhitehouse.com',
    'https://www.jarenwhitehouse.com',
    'http://localhost:3000'
  ],
})