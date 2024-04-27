module.exports = {
	globDirectory: 'css/',
	globPatterns: [
		'**/*.{gif,css}'
	],
	swDest: 'css/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};