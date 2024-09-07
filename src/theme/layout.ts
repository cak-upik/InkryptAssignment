import { ViewStyle } from 'react-native';

export default {
	col: {
		flexDirection: 'column',
	},
	colReverse: {
		flexDirection: 'column-reverse',
	},
	wrap: {
		flexWrap: 'wrap',
	},
	row: {
		flexDirection: 'row',
	},
	rowReverse: {
		flexDirection: 'row-reverse',
	},
	itemsCenter: {
		alignItems: 'center',
	},
	itemsStart: {
		alignItems: 'flex-start',
	},
	itemsStretch: {
		alignItems: 'stretch',
	},
	itemsEnd: {
		alignItems: 'flex-end',
	},
	justifyCenter: {
		justifyContent: 'center',
	},
	justifyAround: {
		justifyContent: 'space-around',
	},
	justifyBetween: {
		justifyContent: 'space-between',
	},
	justifyEnd: {
		justifyContent: 'flex-end',
	},
	justifyStart: {
		justifyContent: 'flex-start',
	},
	/* Sizes Layouts */
	flex_1: {
		flex: 1,
	},
	flex_comma1: {
		flex: 0.1,
	},
	flex_comma2: {
		flex: 0.2,
	},
	flex_comma3: {
		flex: 0.3,
	},
	flex_comma4: {
		flex: 0.4,
	},
	flex_comma5: {
		flex: 0.5,
	},
	flex_comma6: {
		flex: 0.6,
	},
	flex_comma7: {
		flex: 0.7,
	},
	flex_comma8: {
		flex: 0.8,
	},
	fullWidth: {
		width: '100%',
	},
	fullHeight: {
		height: '100%',
	},
	/* Positions */
	relative: {
		position: 'relative',
	},
	absolute: {
		position: 'absolute',
	},
	top0: {
		top: 0,
	},
	bottom0: {
		bottom: 0,
	},
	left0: {
		left: 0,
	},
	right0: {
		right: 0,
	},
	z1: {
		zIndex: 1,
	},
	z10: {
		zIndex: 10,
	},
} as const satisfies Record<string, ViewStyle>;
