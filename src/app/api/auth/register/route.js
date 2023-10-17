import { NextResponse } from "next/server";
import connectDb from "@/utils/db";
import User from "@/models/User";
import bcrypt  from 'bcryptjs'


export const POST = async (req) => {
  const { name, email, password } = await req.json();
  
  await connectDb();
  
  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword
  })
  try {
    await newUser.save();
    return new NextResponse("User Has been Created", {
        status: 201,
    });
    
  } catch (error) {
    return new NextResponse(err.message, {
        status: 500,
    });
  }
};
