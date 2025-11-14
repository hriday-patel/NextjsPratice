import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const commentid = (await params).id;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentid)
  );
  return Response.json(comment);
}


export async function PATCH() {
    
}
