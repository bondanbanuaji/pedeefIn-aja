import { Button } from "@/components/ui/button";
import { UserButton } from '@clerk/nextjs';
import Link from "next/link";
import { LogIn } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import FileUpload from "@/components/FileUpload";

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId
  const DotIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    )
  }
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-pink-200 via-teal-400 to-blue-400">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center pb-2">
            <h1 className="mr-3 text-5xl font-semibold">Nanya Bareng PedeefIn-aja</h1>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth && 
              <Button className="relative overflow-hidden text-gray-100 bg-black group">
              <span
                className="absolute inset-0 bg-gray-300 transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0"
                aria-hidden="true"
              ></span>
              <span
                className="relative transition duration-500 ease-in-out group-hover:text-black"
              >
                Langsung Ngobrol
              </span>
            </Button>            
            }
          </div>

          <p className="max-w-xl mt-4 text-lg text-slate-600">
            Jangan Jadikan A.I Sebagai Pelampiasan Amarah dan Emosi, Ketika Kamu Lagi Galau. Gunakan A.I ini sebijak-bijaknya
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload />
            ) : (
              <Link href="/sign-in">
                <Button className="relative overflow-hidden text-gray-100 bg-black group">
                  <span
                    className="absolute inset-0 bg-gray-300 transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="relative transition duration-500 ease-in-out group-hover:text-black"
                  >
                    Login untuk mulai
                  </span>
                  <LogIn className="relative w-4 h-4 ml-2 transition duration-500 ease-in-out group-hover:text-black" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

