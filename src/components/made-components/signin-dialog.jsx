'use server'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaLock, FaKey } from "react-icons/fa6"
import { SignInWithGithub, SignInWithGoogle } from '@/components/made-components/signinbuttons';


export async function SigninDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <div className="">sign(in || up)</div>
          <div className="flex justify-center p-5">
            <div className="-rotate-[-20deg] transition-all">
                <FaLock size={30}/>
            </div>
            <div className="rotate-[90deg] transition-all">
                <FaKey size={30}/>
            </div>
        </div>
          </DialogTitle>
          <DialogDescription>
            Enter your details to sign in or create a new account.
          </DialogDescription>
        </DialogHeader>
        <form action={"credentialsAction"}>
            <div className="grid gap-4">
                <Input type="email" id="credentials-email" name="email" />
                <Input type="password" id="credentials-password" name="password"/>
                <Button type='submit' >Sign in/up</Button>
                <div className="flex items-center justify-center my-6">
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <span className="px-4 text-gray-200 font-thin">or</span>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>                
                <SignInWithGoogle className='w-full'/>
                <SignInWithGithub/>
            </div>
        </form>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div> */}
        <DialogFooter>
          <DialogClose asChild><Button type="submit" variant="secondary">Cancel</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
