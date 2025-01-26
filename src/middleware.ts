import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isDashboardRoute = createRouteMatcher(['/src/app/page.tsx(.*)'])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
    // Restrict admin route to users with specific role
    if (isAdminRoute(req)) await auth.protect({ role: 'org:admin' })

    // Restrict dashboard routes to signed in users
    if (isDashboardRoute(req)) await auth.protect()
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}