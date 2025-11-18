
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

// export const config = {
//     matcher: "/photofeed"
// }