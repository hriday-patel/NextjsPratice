import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query');
  const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments;
  return Response.json(filteredComments);
}

export async function POST(request: Request){
  const comment = await request.json();
  const text = comment.text;
  const newComment = {
    id: comments.length + 1,
    text: text
  }
  comments.push(newComment);
  return new Response(JSON.stringify(comments), 
  {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 201,
  }, 
)
}