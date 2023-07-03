import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URL!);
		const connection = mongoose.connection;
		connection.on('connected', () => {
			console.log(`DB connected successfully`);
		});
		connection.on('error', (error) => {
			console.log(`Failed to load db`, error);
			process.exit();
		});
	} catch (error) {
		console.log(error);
	}
};
