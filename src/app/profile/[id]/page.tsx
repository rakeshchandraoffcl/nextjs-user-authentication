'use client';

import { Spinner } from '@/app/components';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const UserProfilePage = ({ params }: { params: { id: string } }) => {
	const router = useRouter();
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [logoutLoading, setLogOutLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data: apiResponse } = await axios.get('/api/users/me');
				setData(apiResponse.data);
			} catch (error: any) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		})();
	}, [params.id]);
	const onLogout = async () => {
		try {
			setLogOutLoading(true);
			await axios.get('/api/users/logout');
			toast.success('Logged out successfully');
			router.push('/login');
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setLogOutLoading(false);
		}
	};
	return (
		<div className="container mx-auto p-4">
			<div className="mt-4 flex justify-between items-center">
				<div>
					<p className="text-2xl text-black">Profile Page</p>
					{loading && <Spinner />}
					{data && (
						<div className="mt-4">
							<p>{data.username}</p>
							<p>{data.email}</p>
						</div>
					)}
				</div>
				<button
					type="button"
					onClick={onLogout}
					disabled={loading}
					className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white"
				>
					{logoutLoading ? 'Processing...' : 'Logout'}
				</button>
			</div>
		</div>
	);
};

export default UserProfilePage;
