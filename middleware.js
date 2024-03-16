import { withAuth } from "next-auth/middleware";
import {NextResponse} from "next/server";

// export { default } from 'next-auth/middleware'

export default withAuth(
    function middleware(request){
        console.log("request.nextUrl.pathname---->",request.nextUrl.pathname)
        console.log("request.nextauth.token---->",request.nextauth.token)
        if(request.nextUrl.pathname.startsWith('/dashboard/settings')
            && request.nextauth.token?.role !== 'admin') {
            return NextResponse.rewrite(
                new URL('/dashboard/denied', request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        }
    }
)

export const config = { matcher: ['/dashboard', "/dashboard/:path*"] }
