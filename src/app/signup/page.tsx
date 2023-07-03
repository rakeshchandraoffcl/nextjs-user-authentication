'use client';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

const SignUpPage = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('first');
	};
	return (
		<section>
			<div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
				<div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
					<h2 className="text-center text-2xl font-bold leading-tight text-black">
						Sign up to create account
					</h2>
					<p className="mt-2 text-center text-base text-gray-600">
						Already have an account?{' '}
						<Link
							href="/login"
							title=""
							className="font-medium text-black transition-all duration-200 hover:underline"
						>
							Sign In
						</Link>
					</p>
					<form className="mt-8" onSubmit={onSubmit}>
						<div className="space-y-5">
							<div>
								<label
									htmlFor="name"
									className="text-base font-medium text-gray-900"
								>
									{' '}
									Username{' '}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="Full Name"
										id="name"
										value={user.username}
										onChange={(e) =>
											setUser({ ...user, username: e.target.value })
										}
									></input>
								</div>
							</div>
							<div>
								<label
									htmlFor="email"
									className="text-base font-medium text-gray-900"
								>
									{' '}
									Email address{' '}
								</label>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="email"
										placeholder="Email"
										id="email"
										value={user.email}
										onChange={(e) =>
											setUser({ ...user, email: e.target.value })
										}
									></input>
								</div>
							</div>
							<div>
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="text-base font-medium text-gray-900"
									>
										{' '}
										Password{' '}
									</label>
								</div>
								<div className="mt-2">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="password"
										placeholder="Password"
										id="password"
										value={user.password}
										onChange={(e) =>
											setUser({ ...user, password: e.target.value })
										}
									></input>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
								>
									Create Account
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default SignUpPage;
