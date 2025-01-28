'use client'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"
import { FaLock } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";

import { SignInWithGithub, SignInWithGoogle } from "../signinproviders";

//sign in button that opens a sign in modal with options
export default function SignInButton() {
    return (
        <>
        <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-primary btn-outline rounded-lg">
            Sign In
        </button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box border max-w-lg">
                <h3 className="font-light text-3xl text-center">
                    sign(in || up)
                </h3>
                <div className="flex justify-center p-5">
                    <div className="-rotate-[-20deg] transition-all">
                        <FaLock size={30}/>
                    </div>
                    <div className="rotate-[90deg] transition-all">
                        <FaKey size={30}/>
                    </div>
                </div>
                <form action={"credentialsAction"}>
                    <label htmlFor="credentials-email" className="input font-thin input-bordered flex items-center gap-2">
                        email
                        <input type="email" id="credentials-email" name="email" className="grow"/>
                    </label>
                    <label htmlFor="credentials-password" className="input font-thin input-bordered flex items-center gap-2 my-3">
                        password
                        <input type="password" id="credentials-password" name="password" className="grow"/>
                    </label>
                    <input className="btn btn-block" type="submit" value="Sign In" />                        
                </form>
                <div className="flex items-center justify-center my-6">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="px-4 text-gray-200 font-thin">or</span>
                <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                <div className="border-2 p-3 flex my-5">
                    <div className="flex-0">
                        <FaGithub size={44} />
                    </div>
                    <div className="flex-1 text-lg justify-center items-center flex">
                        <SignInWithGithub />
                    </div>
                </div>
                <div className="border-2 p-3 flex my-5">
                    <div className="flex-0 pl-1">
                        <FaGoogle size={41} />
                    </div>
                    <div className="flex-1 text-lg justify-center items-center flex">
                        <SignInWithGoogle />
                    </div>
                </div>                   
                <div className="modal-action">
                <form method="dialog">
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>
        </>
    )
}






// function SignOut() {
//     return (
//       <form
//         action={async () => {
//           "use server"
//           await signOut()
//         }}
//       >
//         <button type="submit">Sign Out</button>
//       </form>
//     )
//   }