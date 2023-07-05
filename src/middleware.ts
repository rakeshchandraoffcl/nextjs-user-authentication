import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ROUTE_PATH } from './types/route';

export function middleware(request: NextRequest) {
	// return NextResponse.redirect(new URL('/home', request.url));
	const authPaths: Array<String> = [ROUTE_PATH.Signup, ROUTE_PATH.Login];
	const protectedPaths: Array<String> = [ROUTE_PATH.Profile];
	const currentPathName = request.nextUrl.pathname;
	const token = request.cookies.get('token')?.value;
	if (token) {
		if (authPaths.includes(currentPathName)) {
			return NextResponse.redirect(new URL(ROUTE_PATH.Home, request.nextUrl));
		}
	} else {
		if (
			protectedPaths.includes(currentPathName) ||
			currentPathName.startsWith('/profile')
		) {
			return NextResponse.redirect(new URL(ROUTE_PATH.Login, request.nextUrl));
		}
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/login', '/signup', '/profile/:path*'],
};
