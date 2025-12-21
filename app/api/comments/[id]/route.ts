import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = session.user;
  const { id } = await params;

  if (!id) {
    return new NextResponse("Comment ID is required", { status: 400 });
  }

  // Find the comment first
  const comment = await prisma.comment.findUnique({
    where: { id: id },
  });

  if (!comment) {
    return new NextResponse("Comment not found", { status: 404 });
  }

  // Ensure the logged-in user owns the comment
  if (comment.userId !== user.id) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  await prisma.comment.delete({
    where: { id: id },
  });

  return NextResponse.json(
    { message: "Comment deleted successfully" },
    { status: 200 }
  );
}
