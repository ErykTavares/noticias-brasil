/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
				port: '',
				pathname: '/*'
			}
		]
	},
	i18n: {
		locales: ['pt-br'],
		defaultLocale: 'pt-br'
	}
};

module.exports = nextConfig;
