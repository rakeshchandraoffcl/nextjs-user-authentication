import { connectDB } from '@/config/dbConnection';
import { User } from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		const { username, email, password } = reqBody;
		const user = await User.findOne({ email });
		if (user) {
			return NextResponse.json(
				{ error: 'Email already exists' },
				{ status: 400 }
			);
		}
		const genSalt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, genSalt);
		const newUser = await User.create({
			username,
			email,
			password: hashedPassword,
		});
		console.log(newUser);
		return NextResponse.json(
			{
				status: 'success',
				data: {
					user: {
						id: newUser.id,
					},
				},
			},
			{ status: 201 }
		);
	} catch (err: any) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
