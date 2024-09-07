module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
		production: {
			plugins: [],
		},
	},
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.js', '.json'],
				alias: {
					'@': './src',
				},
			},
		],
		'inline-dotenv',
  ],
};
