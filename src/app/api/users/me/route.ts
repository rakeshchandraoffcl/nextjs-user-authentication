import { connectDB } from '@/config/dbConnection';
import { User } from '@/models/userModel';
import { getDataFromToken } from '@/utils/getDataFromToken';
import { NextRequest, NextResponse } from 'next/server';

connectDB();
export async function GET(request: NextRequest) {
	try {
		const userId = await getDataFromToken(request);
		const user = await User.findById(userId).select('-password');
		if (!user) {
			return NextResponse.json({ error: 'user not found' }, { status: 404 });
		}
		return NextResponse.json(
			{ status: 'success', data: user },
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
