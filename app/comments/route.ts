import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
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