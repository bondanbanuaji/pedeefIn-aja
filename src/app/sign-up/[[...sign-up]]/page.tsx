'use client'
import { useState } from 'react'
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="grid w-full grow items-center px-4 sm:justify-center">
            <SignUp.Root>
                <Clerk.Loading>
                    {(isGlobalLoading) => (
                        <>
                            <SignUp.Step name="start">
                                <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-pink-200 via-teal-400 to-blue-400">
                                    <Card className="w-full sm:w-96 space-y-1 border-2 border-transparent shadow-xl shadow-gray-700/70">
                                        <CardHeader className="text-center space-y-3">
                                            <div className="flex justify-center items-center p-1">
                                                <img
                                                    srcSet="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJzQm5LdDZlZkhvZFltZFRKT3BrWE5NdGk1YiJ9?width=200 1x,https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJzQm5LdDZlZkhvZFltZFRKT3BrWE5NdGk1YiJ9?width=400 2x"
                                                    src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJzQm5LdDZlZkhvZFltZFRKT3BrWE5NdGk1YiJ9?width=400"
                                                    className="cl-logoImage 🔒️ cl-internal-uumn80 border border-transparent shadow-gray-500/50 shadow-lg w-20"
                                                    alt="PedeefIn-aja"
                                                />
                                            </div>
                                            <CardTitle>Daftar Akun</CardTitle>
                                            <CardDescription>
                                                Silahkan daftarkan dirimu terlebih dahulu 
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="grid gap-y-4">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                <Clerk.Connection name="github" asChild>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        type="button"
                                                        disabled={isGlobalLoading}
                                                    >
                                                        <Clerk.Loading scope="provider:github">
                                                            {(isLoading) =>
                                                                isLoading ? (
                                                                    <Icons.spinner className="size-4 animate-spin" />
                                                                ) : (
                                                                    <>
                                                                        <Icons.gitHub className="mr-2 size-4" />
                                                                        GitHub
                                                                    </>
                                                                )
                                                            }
                                                        </Clerk.Loading>
                                                    </Button>
                                                </Clerk.Connection>
                                                <Clerk.Connection name="google" asChild>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        type="button"
                                                        disabled={isGlobalLoading}
                                                    >
                                                        <Clerk.Loading scope="provider:google">
                                                            {(isLoading) =>
                                                                isLoading ? (
                                                                    <Icons.spinner className="size-4 animate-spin" />
                                                                ) : (
                                                                    <>
                                                                        <Icons.google className="mr-2 size-4" />
                                                                        Google
                                                                    </>
                                                                )
                                                            }
                                                        </Clerk.Loading>
                                                    </Button>
                                                </Clerk.Connection>
                                            </div>
                                            <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                                                atau
                                            </p>
                                            <Clerk.Field name="username" className="space-y-2">
                                                <Clerk.Label asChild>
                                                    <Label>Masukkan Username</Label>
                                                </Clerk.Label>
                                                <Clerk.Input type="username" required asChild placeholder="Daftarkan Username">
                                                    <Input />
                                                </Clerk.Input>
                                                <Clerk.FieldError className="block text-sm text-destructive" />
                                            </Clerk.Field>
                                            <Clerk.Field name="emailAddress" className="space-y-2">
                                                <Clerk.Label asChild>
                                                    <Label>Masukkan Alamat Email</Label>
                                                </Clerk.Label>
                                                <Clerk.Input type="email" required asChild placeholder="Daftarkan Email">
                                                    <Input />
                                                </Clerk.Input>
                                                <Clerk.FieldError className="block text-sm text-destructive" />
                                            </Clerk.Field>
                                            <Clerk.Field name="password" className="space-y-2">
                                                <Clerk.Label asChild>
                                                    <Label>Masukkan Password</Label>
                                                </Clerk.Label>
                                                <div className="relative">
                                                    <Clerk.Input
                                                        type={showPassword ? "text" : "password"}
                                                        required
                                                        placeholder="Masukkan Password"
                                                        asChild
                                                    >
                                                        <Input className="w-full px-3 py-2 border rounded-md" />
                                                    </Clerk.Input>
                                                    <button
                                                        type="button"
                                                        onClick={togglePasswordVisibility}
                                                        className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                                                    >
                                                        {showPassword ? (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                className="h-5 w-5 transition-all duration-1000 ease-in-out"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"
                                                                />
                                                                <circle cx="12" cy="12" r="3" />
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="2"
                                                                stroke="currentColor"
                                                                className="h-5 w-5 transition-all duration-1000 ease-in-out"
                                                            >
                                                                <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                                    <path
                                                                        d="M2 2L22 22"
                                                                        className="transition-all duration-1000 ease-in-out opacity-100"
                                                                    />
                                                                    <path d="M6.713 6.723C3.665 8.796 2 12 2 12s3.636 7 10 7c2.05 0 3.817-.727 5.271-1.712M11 4.5c.325-.038.659-.058 1-.058 6.364 0 10 7 10 7s-.692 1.332-2 2.834" />
                                                                    <path d="M14 14.236c-.531.475-1.232.764-2 .764-1.657 0-3-1.343-3-3 0-.824.332-1.57.869-2.112" />
                                                                </g>
                                                            </svg>
                                                        )}
                                                    </button>
                                                </div>
                                                <Clerk.FieldError className="block text-sm text-destructive" />
                                            </Clerk.Field>

                                        </CardContent>

                                        <CardFooter>
                                            <div className="grid w-full gap-y-4 flex-col items-center space-y-2">
                                                <SignUp.Captcha className="empty:hidden" />
                                                <SignUp.Action submit asChild>
                                                    <Button
                                                        disabled={isGlobalLoading}
                                                        className="relative overflow-hidden group bg-black text-gray-100 px-4 py-2 rounded-lg transition-all duration-500"
                                                    >
                                                        <span
                                                            className="absolute inset-0 bg-gray-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                                                            style={{ zIndex: 1 }}
                                                        ></span>
                                                        <span
                                                            className="absolute inset-0 bg-black translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out"
                                                            style={{ zIndex: 0 }}
                                                        ></span>
                                                        <Clerk.Loading>
                                                            {(isLoading) => {
                                                                return isLoading ? (
                                                                    <Icons.spinner className="size-4 animate-spin z-10 relative" />
                                                                ) : (
                                                                    <span
                                                                        className="relative z-10 group-hover:text-black transition-colors duration-500"
                                                                    >
                                                                        Daftar
                                                                    </span>
                                                                );
                                                            }}
                                                        </Clerk.Loading>
                                                    </Button>

                                                </SignUp.Action>
                                                <Button variant="link" size="sm" asChild>
                                                    <Clerk.Link navigate="sign-in">Sudah punya akun? Loginin aja</Clerk.Link>
                                                </Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </SignUp.Step>

                            <SignUp.Step name="continue">
                                <Card className="w-full sm:w-96">
                                    <CardHeader>
                                        <CardTitle>Lanjut Daftar</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Clerk.Field name="username" className="space-y-2">
                                            <Clerk.Label>
                                                <Label>Username</Label>
                                            </Clerk.Label>
                                            <Clerk.Input type="text" required asChild>
                                                <Input />
                                            </Clerk.Input>
                                            <Clerk.FieldError className="block text-sm text-destructive" />
                                        </Clerk.Field>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="grid w-full gap-y-4">
                                            <SignUp.Action submit asChild>
                                                <Button disabled={isGlobalLoading}>
                                                    <Clerk.Loading>
                                                        {(isLoading) => {
                                                            return isLoading ? (
                                                                <Icons.spinner className="size-4 animate-spin" />
                                                            ) : (
                                                                'Lanjut'
                                                            )
                                                        }}
                                                    </Clerk.Loading>
                                                </Button>
                                            </SignUp.Action>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </SignUp.Step>

                            <SignUp.Step name="verifications">
                                <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-pink-200 via-teal-400 to-blue-400">
                                    <div className="flex items-center justify-center min-h-[75vh] w-full">
                                    <SignUp.Strategy name="email_code">
                                        <Card className="w-full sm:w-96 space-y-1 border-2 border-transparent shadow-xl shadow-gray-600/50">
                                            <CardHeader className="text-center space-y-3">
                                                <CardTitle>Verifikasi email</CardTitle>
                                                <CardDescription>
                                                    Kami sudah mengirim kode verifikasi, silahkan cek verifikasi email kamu
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid gap-y-4">
                                                <div className="grid items-center justify-center gap-y-2">
                                                    <Clerk.Field name="code" className="space-y-2">
                                                        <Clerk.Label className="sr-only">Alamat Email</Clerk.Label>
                                                        <div className="flex justify-center text-center">
                                                            <Clerk.Input
                                                                type="otp"
                                                                className="flex justify-center has-[:disabled]:opacity-50 text-black border border-gray-400 rounded-md"
                                                                autoSubmit
                                                                render={({ value, status }) => {
                                                                    return (
                                                                        <div
                                                                            data-status={status}
                                                                            className={cn(
                                                                                'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md border-gray-400',
                                                                                {
                                                                                    'z-10 ring-2 ring-ring ring-offset-background':
                                                                                        status === 'cursor' || status === 'selected',
                                                                                },
                                                                            )}
                                                                        >
                                                                            {value}
                                                                            {status === 'cursor' && (
                                                                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                                                                    <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                        <Clerk.FieldError className="block text-center text-sm text-destructive" />
                                                    </Clerk.Field>
                                                    <SignUp.Action
                                                        asChild
                                                        resend
                                                        className="text-muted-foreground"
                                                        fallback={({ resendableAfter }) => (
                                                            <Button variant="link" size="sm" disabled>
                                                                Kirim ulang kode dalam (
                                                                <span className="tabular-nums">{resendableAfter}</span>)
                                                            </Button>
                                                        )}
                                                    >
                                                        <Button type="button" variant="link" size="sm">
                                                            Gak dapet kode? Kirim ulang
                                                        </Button>
                                                    </SignUp.Action>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                    <div className="grid w-full gap-y-4">
                                                        <SignUp.Action submit asChild>
                                                            <Button
                                                                className="relative overflow-hidden text-gray-100 bg-black border-none rounded-lg group"
                                                            >
                                                                <Clerk.Loading>
                                                                    {(isLoading) => {
                                                                        return (
                                                                            <>
                                                                                <span className="relative z-10 transition-opacity duration-500 text-gray-100 group-hover:text-black">
                                                                                    Verifikasi
                                                                                </span>
                                                                                <span className="absolute inset-0 flex items-center justify-center text-gray-100 group-hover:text-black transition-opacity duration-500">
                                                                                    Loading...
                                                                                </span>
                                                                            </>
                                                                        );
                                                                    }}
                                                                </Clerk.Loading>
                                                                <span className="absolute inset-0 bg-gray-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                                                                <span className="absolute inset-0 bg-black translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
                                                            </Button>
                                                        </SignUp.Action>
                                                    </div>
                                            </CardFooter>
                                        </Card>
                                    </SignUp.Strategy>
                                    </div>
                                </div>
                            </SignUp.Step>
                        </>
                    )}
                </Clerk.Loading>
            </SignUp.Root>
        </div>
    )
}