'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
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
import '@/app/globals.css'


export default function SignInPage() {
    return (
        <div className="grid w-full grow items-center px-4 sm:justify-center">
            <SignIn.Root>
                <Clerk.Loading>
                    {(isGlobalLoading) => (
                        <>
                            <SignIn.Step name="start">
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
                                            <CardTitle>Login ke PedeefIn-aja</CardTitle>
                                            <CardDescription>Selamat Datang! Yuk masuk untuk lanjut</CardDescription>
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
                                            <p className="flex items-center gap-x-3 text-sm text-black text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border ">
                                                atau
                                            </p>
                                            <Clerk.Field name="identifier" className="space-y-2">
                                                <Clerk.Label asChild>
                                                    <Label>Email</Label>
                                                </Clerk.Label>
                                                <Clerk.Input type="email" required asChild placeholder="Masukkan email yang terdaftar">
                                                    <Input />
                                                </Clerk.Input>
                                                <Clerk.FieldError className="block text-sm text-destructive" />
                                            </Clerk.Field>
                                        </CardContent>
                                        <CardFooter>
                                            <div className="grid w-full gap-y-4">
                                                <SignIn.Action submit asChild>
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
                                                                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">Masuk</span>
                                                                );
                                                            }}
                                                        </Clerk.Loading>
                                                    </Button>
                                                </SignIn.Action>

                                                <Button variant="link" size="sm" asChild>
                                                    <Clerk.Link navigate="sign-up">
                                                        Belum punya akun? Daftar dulu lah
                                                    </Clerk.Link>
                                                </Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </SignIn.Step>

                            <SignIn.Step name="choose-strategy">
                                <div className="flex flex-col text-center items-center justify-center min-h-screen w-screen bg-gradient-to-r from-pink-200 via-teal-400 to-blue-400">
                                    <Card className="w-full sm:w-96 space-y-1 border-2 border-transparent shadow-xl shadow-gray-700/70">
                                        <CardHeader className="gap-1">
                                            <CardTitle>Pakai cara lain</CardTitle>
                                            <CardDescription>
                                                Ada masalah? Kamu bisa coba cara lain.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="grid gap-y-4">
                                            <SignIn.SupportedStrategy name="email_code" asChild>
                                                <Button type="button" variant="link" disabled={isGlobalLoading}>
                                                    Verifikasi email
                                                </Button>
                                            </SignIn.SupportedStrategy>
                                            <SignIn.SupportedStrategy name="password" asChild>
                                                <Button type="button" variant="link" disabled={isGlobalLoading}>
                                                    Login dengan password
                                                </Button>
                                            </SignIn.SupportedStrategy>
                                        </CardContent>
                                        <CardFooter>
                                            <div className="grid w-full gap-y-4">
                                                <SignIn.Action navigate="previous" asChild>
                                                    <Button
                                                        disabled={isGlobalLoading}
                                                        className="relative overflow-hidden group bg-black text-gray-100 px-4 py-2 rounded-lg transition-all duration-300"
                                                    >
                                                        <Clerk.Loading>
                                                            {(isLoading) => {
                                                                return isLoading ? (
                                                                    <Icons.spinner className="size-4 animate-spin z-10 relative" />
                                                                ) : (
                                                                    <span className="relative group-hover:text-black z-10 transition-all">
                                                                        Kembali
                                                                    </span>
                                                                );
                                                            }}
                                                        </Clerk.Loading>

                                                        <span className="absolute inset-0 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                                                    </Button>
                                                </SignIn.Action>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </SignIn.Step>

                            <SignIn.Step name="verifications">
                                <SignIn.Strategy name="password">
                                <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-r from-pink-200 via-teal-400 to-blue-400">
                                    <Card className="w-full sm:w-96 space-y-1 border-2 border-transparent shadow-xl shadow-gray-700/70">
                                        <CardHeader className="gap-1 text-center">
                                                <CardTitle>Login Dengan Password</CardTitle>
                                                <CardDescription>
                                                    Masukkan password akun email
                                                </CardDescription>
                                        </CardHeader>
                                        <CardContent className="grid gap-y-4">
                                            <Clerk.Field name="password" className="space-y-2">
                                                <Clerk.Label asChild>
                                                    <Label>Password</Label>
                                                </Clerk.Label>
                                                <Clerk.Input type="password" asChild>
                                                    <Input />
                                                </Clerk.Input>
                                                <Clerk.FieldError className="block text-sm text-destructive" />
                                            </Clerk.Field>
                                        </CardContent>
                                        <CardFooter>
                                            <div className="grid w-full gap-y-4">
                                                <SignIn.Action submit asChild>
                                                    <Button disabled={isGlobalLoading}>
                                                        <Clerk.Loading>
                                                            {(isLoading) => {
                                                                return isLoading ? (
                                                                    <Icons.spinner className="size-4 animate-spin" />
                                                                ) : (
                                                                    'Verifikasi'
                                                                )
                                                            }}
                                                        </Clerk.Loading>
                                                    </Button>
                                                </SignIn.Action>
                                                <SignIn.Action navigate="choose-strategy" asChild>
                                                    <Button type="button" size="sm" variant="link">
                                                        Pakai cara lain
                                                    </Button>
                                                </SignIn.Action>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                    </div>
                                </SignIn.Strategy>

                                <SignIn.Strategy name="email_code">
                                    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-r from-pink-200 via-teal-400 to-blue-400">
                                        <Card className="w-full sm:w-96 space-y-1 border-2 border-transparent shadow-xl shadow-gray-700/70">
                                            <CardHeader className="gap-1">
                                                <CardTitle>Verifikasi Kode Email</CardTitle>
                                                <CardDescription>
                                                    Masukkan kode verifikasi yang dikirim ke email
                                                </CardDescription>
                                                <p className="text-sm text-muted-foreground">
                                                    Cek email <SignIn.SafeIdentifier />
                                                </p>
                                            </CardHeader>

                                            <CardContent className="grid gap-y-4">
                                                <Clerk.Field name="code" className="space-y-2">
                                                    <Clerk.Label className="sr-only">Kode verifikasi email</Clerk.Label>
                                                    <div className="grid items-center justify-center gap-y-2">
                                                        <div className="flex justify-center text-center">
                                                            <Clerk.Input
                                                                type="otp"
                                                                autoSubmit
                                                                className="flex justify-center has-[:disabled]:opacity-50 text-black border border-gray-400 rounded-md"
                                                                render={({ value, status }) => {
                                                                    const isCursorOrSelected = status === 'cursor' || status === 'selected';
                                                                    return (
                                                                        <div
                                                                            data-status={status}
                                                                            className={cn(
                                                                                'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md border-gray-400',
                                                                                {
                                                                                    'z-10 ring-2 ring-ring ring-offset-background': isCursorOrSelected,
                                                                                }
                                                                            )}
                                                                        >
                                                                            {value}
                                                                            {status === 'cursor' && (
                                                                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                                                                    <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        <Clerk.FieldError className="block text-center text-sm text-destructive" />
                                                        <SignIn.Action
                                                            asChild
                                                            resend
                                                            className="text-muted-foreground"
                                                            fallback={({ resendableAfter }) => (
                                                                <Button variant="link" size="sm" disabled>
                                                                    Gak dapet kode? Kirim ulang (
                                                                    <span className="tabular-nums">{resendableAfter}</span>)
                                                                </Button>
                                                            )}
                                                        >
                                                            <Button variant="link" size="sm">
                                                                Gak dapet kode? Kirim ulang
                                                            </Button>
                                                        </SignIn.Action>
                                                    </div>
                                                </Clerk.Field>
                                            </CardContent>

                                            <CardFooter>
                                                <div className="grid w-full gap-y-2">
                                                    <SignIn.Action submit asChild>
                                                        <Button
                                                            disabled={isGlobalLoading}
                                                            className="relative overflow-hidden group bg-black text-gray-100 px-4 py-2 rounded-lg transition-all duration-300"
                                                        >
                                                            <Clerk.Loading>
                                                                {(isLoading) => {
                                                                    return isLoading ? (
                                                                        <Icons.spinner className="size-4 animate-spin z-10 relative" />
                                                                    ) : (
                                                                        <span className="relative group-hover:text-black z-10 transition-all">
                                                                            Cek Verifikasi Login
                                                                        </span>
                                                                    );
                                                                }}
                                                            </Clerk.Loading>
                                                            <span className="absolute inset-0 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                                                        </Button>
                                                    </SignIn.Action>

                                                    <SignIn.Action navigate="choose-strategy" asChild>
                                                        <Button size="sm" variant="link" className="mt-1">
                                                            Pakai cara lain
                                                        </Button>
                                                    </SignIn.Action>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </SignIn.Strategy>
                        </SignIn.Step>
                </>
                    )}
            </Clerk.Loading>
        </SignIn.Root>
        </div >
    )
}