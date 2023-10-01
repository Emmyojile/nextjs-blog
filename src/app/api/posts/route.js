import { NextResponse } from "next/server";
import connectDb from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req) => {
  try {
    await connectDb();

    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
