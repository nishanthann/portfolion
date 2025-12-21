import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = session.user;
  const { content } = await req.json();

  if (!content || typeof content !== "string" || content.trim().length === 0) {
    return new NextResponse("Invalid content", { status: 400 });
  }

  try {
    // Upsert ensures only one comment per user
    const comment = await prisma.comment.upsert({
      where: { userId: user.id }, // check if the user already has a comment
      update: { content: content.trim() }, // if exists, update content
      create: {
        content: content.trim(), // if not, create new comment
        userId: user.id,
      },
    });

    return new Response(JSON.stringify(comment), { status: 201 });
  } catch (err) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
