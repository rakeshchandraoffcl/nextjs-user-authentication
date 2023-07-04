'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<div className="relative w-full bg-white">
				<div className="mx-auto max-w-7xl lg:px-8">
					<div className="flex flex-col justify-center px-4 py-10 lg:px-6">
						<h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
							Next JS User Authentication
						</h1>
						<p className="mt-8  text-lg text-gray-700">
							This application is a simple user authentication application built
							with Next.js. It allows users to create an account, log in, and
							log out. The application uses JWTs for authentication. This
							application is intended to be a starting point for building more
							complex user authentication applications with Next.js.
						</p>

						<div className="mt-8">
							<Link
								href={'/signup'}
								type="button"
								className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
							>
								Signup
							</Link>
							<Link
								href={'/login'}
								type="button"
								className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ml-4"
							>
								Login
							</Link>
						</div>
					</div>
					<div className="rounded-lg bg-gray-200 p-4">
						<Image
							className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
							src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
							alt="users"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
