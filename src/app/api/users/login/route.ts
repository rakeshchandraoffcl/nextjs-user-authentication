import { connectDB } from '@/config/dbConnection';
import { User } from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		const { email, password } = reqBody;
		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 });
		}

		const isValid = await bcryptjs.compare(password, user.password);
		if (!isValid) {
			return NextResponse.json(
				{ error: 'Invalid email or password' },
				{ status: 401 }
			);
		}

		const tokenData = {
			id: user._id,
			email: user.email,
			username: user.email,
		};

		const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
			expiresIn: '1d',
		});

		const response = NextResponse.json(
			{
				status: 'success',
				data: {
					id: user._id,
				},
			},
			{ status: 200 }
		);

		response.cookies.set('token', token, {
			httpOnly: true,
		});
		return response;
	} catch (err: any) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
