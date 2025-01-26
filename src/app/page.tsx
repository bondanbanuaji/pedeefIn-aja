import { Button } from "@/components/ui/button";
import { UserButton } from '@clerk/nextjs';
import Link from "next/link";
import { LogIn } from "lucide-react";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-pink-200 via-teal-400 to-blue-400">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold ">Nanya Bareng PedeefIn-aja</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth && (
              <Button>Langsung Ngobrol</Button>
            )}
          </div>
          <p className="max-w-xl mt-2 text-lg text-slate-600">
            Nanya-nanya itu boleh, tapi yang penting jangan nanya yang aneh-aneh ya...
          </p>
          <div className="w-full mt-4">
            {isAuth ? (<h1>fileupload</h1>
            ) : (
              <Link href="/sign-in">
                <Button>Login untuk mulai
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

