import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		const response = NextResponse.json({ status: 'success' }, { status: 200 });
		response.cookies.set('token', '', { expires: new Date(0), httpOnly: true });
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
