import connectMongoDB from "../../../../config/mongodb";
import bcrypt from 'bcryptjs';
import User from "@/models/UserSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectMongoDB();
        const {email,password} = await request.json();
        const hashedPassword = await bcrypt.hash(password,5);
        const newUser = {
            email,
            password: hashedPassword,
        }
        if (!email || !password) {
            return NextResponse.json({message: "missing an input for signup"}, {status: 400});
        }
        await User.create(newUser);
        return NextResponse.json({message: "New user created"}, {status: 201});
    } catch(er) {
        console.error("error with signup process", er);
        return NextResponse.json({message: "Signup server error"},{status: 500});
    }
}
 