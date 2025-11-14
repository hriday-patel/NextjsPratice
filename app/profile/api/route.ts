import { log } from "console";
import { headers } from "next/headers";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest){
    // console.log(request.headers.get("Authorization"))
    const header = (await headers()).get("Authorization");
    log(header);
    return Response.json("Hello !");
}


