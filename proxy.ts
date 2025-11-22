
import { clerkMiddleware } from '@clerk/nextjs/server';
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request : NextRequest){
    // return Response.redirect(new URL("/", request.url));
    // return NextResponse.redirect(new URL("/", request.url));
    // if(request.nextUrl.pathname === "/dashboard"){
    //     return NextResponse.redirect(new URL("/photofeed", request.url));
    // }
    // if(request.nextUrl.pathname === "/dashboard"){
    //     return NextResponse.rewrite(new URL("/photofeed", request.url));
    // }
    const newResponse = NextResponse.next() ;
    const theme = request.cookies.get("theme");
    if(!theme){
        newResponse.cookies.set("theme", "default");
    }
    newResponse.headers.set("Hriday", "Patel");
    return newResponse;
}


export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

// export const config = {
//     matcher: "/photofeed"
// }