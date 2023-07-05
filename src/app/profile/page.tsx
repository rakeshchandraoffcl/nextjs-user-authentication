'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ProfilePage = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const onLogout = async () => {
		try {
			setLoading(true);
			await axios.get('/api/users/logout');
			toast.success('Logged out successfully');
			router.push('/login');
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="mx-auto max-w-7xl lg:px-8">
			<div className="mt-4 flex justify-between items-center">
				<div>
					<p className="text-2xl text-black">Profile Page</p>
				</div>
				<button
					type="button"
					onClick={onLogout}
					disabled={loading}
					className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white"
				>
					{loading ? 'Processing...' : 'Logout'}
				</button>
			</div>
		</div>
	);
};

export default ProfilePage;
