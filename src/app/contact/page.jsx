'use server'
import { FaBluesky } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
    
    try {
        const newMessage = await prisma.message.create(
            {
                data: {
                    name,
                    email,
                    message
                }
            }
        )

    } catch (err) {
        console.error(err)
    }
    
    
    revalidatePath('/contact')
}

async function getMessages(email) {
    const messages = await prisma.message.findMany({
        where: {
            email: email
        }
    })
    return messages
}

const PrevMessages = ({messages}) => (
    <div>
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
    const leftMessages = await getMessages(session.user?.email || "") || []
    

    
    return (
        <div>            
            <pre>{JSON.stringify(leftMessages,0,9)}</pre>
            <pre>{JSON.stringify(await getMessages(session.user.email))}</pre>
            <div>
                {/* {Array.isArray(leftMessages) && leftMessages.length > 0 ? leftMessages.map( (x, i) => x.message) : ( */}
                {Array.isArray(leftMessages) && leftMessages.length > 0 ? <PrevMessages messages={leftMessages} /> : (
                    "npoe"
                )}
            </div>
            <form action={submitForm} className="flex flex-col gap-4 p-5">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="bg-slate-900" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="bg-slate-900" />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={10} className="bg-slate-900"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}



<form action={"sumbitAction"} className="flex flex-col gap-4 p-5">
<label htmlFor="name">Name</label>
<input type="text" id="name" name="name" className="bg-slate-900" />
<label htmlFor="email">Email</label>
<input type="email" id="email" name="email" className="bg-slate-900" />
<label htmlFor="message">Message</label>
<textarea id="message" name="message" rows={10} className="bg-slate-900"></textarea>
<button type="submit">Send</button>
</form>