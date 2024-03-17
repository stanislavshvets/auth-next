import { withAuth } from "next-auth/middleware";
import {NextResponse} from "next/server";

// export { default } from 'next-auth/middleware'

export default withAuth(
    function middleware(request){
        console.log("request.nextUrl.pathname---->",request.nextUrl.pathname)
        console.log("request.nextauth.token---->",request.nextauth.token)

        const { pathname } = request.nextUrl;
        const { role } = request.nextauth.token;

        if (role === 'admin') {
            return;
        }

        if (role === 'manager' && pathname.startsWith('/dashboard/settings')) {
            return NextResponse.rewrite(new URL('/dashboard/denied', request.url));
        }

        if (role === 'editor' && (
            pathname.startsWith('/dashboard/clients') ||
            pathname.startsWith('/dashboard/settings') ||
            pathname.startsWith('/dashboard/notifications')
        )) {
            return NextResponse.rewrite(new URL('/dashboard/denied', request.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        }
    }
)

export const config = { matcher: ['/dashboard', "/dashboard/:path*"] }
