'use server'
import { FaBluesky } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import { auth } from "@/auth"
import { revalidatePath } from "next/cache"
import prisma from "@/lib/prisma"

async function submitForm(formData) {
    'use server'
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")
    console.log(name,email,message)
    
    const session = await auth()
    const userId = session.userId || null

    try {
        const newMessage = await prisma.message.create(
            {
                data: {
                    name,
                    email,
                    message,
                    userId 
                }
            }
        )
        console.log(`created new message, `, newMessage)

    } catch (err) {
        console.error(err)
    }
    
    
    revalidatePath('/contact')
}

async function getMessages(user) {
    const messages = await prisma.message.findMany({
        where: {
            OR: [
                {email: user.email},
                {userId:user.id}
                
            ]
        }
    })
    return messages
}

const PrevMessages = ({messages}) => (
    <div className="mx-10">
    <h2 className="text-3xl font-thin">Previous Messages</h2>
        <Table>
        <TableCaption>Thank you for your messages!</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">From</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Sent On</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
        {messages.map((message, index) => (
            <TableRow key={index}>
            <TableCell>{message.name}</TableCell>
            <TableCell>{message.message}</TableCell>
            <TableCell>{message.createdAt.toString().slice(4,15)}</TableCell>
            <TableCell>{message.email}</TableCell>
            <TableCell className="text-right">received</TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
    </div>
)


export default async function Contact() {
    
    const session = await auth()
    const leftMessages = await getMessages(session?.user || "") || []
    

    
    return (
        <div>
            <title>Contact Jaren Whitehouse</title>   
            <div className="container mx-auto max-w-3xl p-5 rounded-xl">
                <h1 className="text-5xl font-black">
                Get in touch!
                </h1>
                <h2 className="text-3xl font-black">
                Drop a line online
                </h2>
                <div className="flex justify-center gap-10 p-5">
                    <Link href="https://bsky.app/profile/jarenwhitehouse.bsky.social" target="_blank">
                        <FaBluesky className="text-5xl hover:scale-125 transition hover:cursor-pointer hover:text-accent" />
                    </Link>
                    <Link href="https://github.com/m4cbeth" target="_blank">
                        <FaGithub className="text-5xl hover:scale-125 transition hover:cursor-pointer hover:text-accent" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jaren-whitehouse" target="_blank">
                        <FaLinkedin className="text-5xl hover:scale-125 transition hover:cursor-pointer hover:text-accent" />
                    </Link>
                </div>
                <h2 className="px-5 pt-5">
                    Or if you&apos;ve got a question, ask away!
                </h2>
                <form action={submitForm} className="flex flex-col gap-4 p-5">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="bg-slate-900" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="bg-slate-900" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={10} className="bg-slate-900"></textarea>
                    <button type="submit">Send</button>
                </form>
                <div>
                    {console.log(session?.user)}
                    {Array.isArray(leftMessages) && 
                    leftMessages.length > 0 ? 
                    <PrevMessages messages={leftMessages} /> 
                    : ("")}
                </div>
            </div>     
        </div>
    )
}

