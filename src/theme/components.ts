import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/types/theme/theme';

interface AllStyle
	extends Record<string, AllStyle | ImageStyle | TextStyle | ViewStyle> {}

export default ({ layout, backgrounds, fonts }: ComponentTheme) => {
	return {
		buttonCircle: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.purple100,
			...fonts.gray400,
			height: 70,
			width: 70,
			borderRadius: 35,
		},
		cardOutlineRounded30: {
			...layout.justifyAround,
			...layout.itemsCenter,
			width: 328,
			height: 211,
			backgroundColor: 'rgba(112, 113, 122, 0.2)',
			borderRadius: 30,
			borderColor: 'rgba(163, 62, 251, 0.3)',
			borderWidth: 1,
		},
		buttonRoundedOutline40: {
			borderRadius: 40,
			borderWidth: 1,
			borderColor: '#C08CE0',
		},
	} as const satisfies AllStyle;
};
