import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const commentid = (await params).id;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentid)
  );
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const commentId = (await params).id;
  const { text } = await request.json();
  const newComments = comments.map((comment) =>
    comment.id === parseInt(commentId) ? { ...comment, text: text } : comment
  );
  return Response.json(newComments);
}

export async function DELETE(_request: Request, {params}: {params: Promise<{id: string}>}){
        const id = (await params).id;
        const newComments = comments.filter((comment) => comment.id !== parseInt(id));
        return Response.json(newComments);
}