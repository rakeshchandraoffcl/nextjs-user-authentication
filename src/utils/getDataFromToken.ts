import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export const getDataFromToken = async (request: NextRequest) => {
	try {
		const token = request.cookies.get('token')?.value ?? '';
		const tokenData = jwt.verify(
			token,
			process.env.TOKEN_SECRET!
		) as jwt.JwtPayload;
		return tokenData.id;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
