module.exports = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/coffees",
				permanent: true,
			},
		];
	}
};
