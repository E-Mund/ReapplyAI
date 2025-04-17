import connectMongoDB from "../../../../config/mongodb";

await connectMongoDB();
/*
const hashedPassword = await bcrypt.hash(password,5);

const newUser = {
    email,
    password: hashedPassword
}
 */