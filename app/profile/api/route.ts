import { log } from "console";
import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // console.log(request.headers.get("Authorization"))
  // const header = (await headers()).get("Authorization");
  // log(header);

  // const cookie = (await cookies()).get("theme");
  // const cookie2 = (await cookies()).set("Hriday", "Patel");
  // console.log((await cookies()));
  return Response.json("<h1>Hello Baby</h1>", {
    headers: {
      "Content-Type": "text/html",
      // "Set-Cookie": "theme=dark",
    },
  });
}
