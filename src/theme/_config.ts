import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import type { ThemeConfiguration } from '@/types/theme/config';

const colorsLight = {
	white: '#FFFFFF',
	cyan: '#00FFFF',
	black: '#000000',
	black1: '#030C20',
	red500: '#C13333',
	red: '#FC5555',
	gray800: '#303030',
	gray400: '#4D4D4D',
	gray250: '#A19FA3',
	gray200: '#A1A1A1',
	gray150: '#DAE0E4',
	gray100: '#DFDFDF',
	gray80: '#E1E3EA',
	gray50: '#EFEFEF',
	gray: '#EAF1F4',
	purple500: '#44427D',
	purple150: '#EFEFFF',
	purple100: '#E1E1EF',
	purple300: '#7C7CDE',
	purple50: '#1B1A23',
	pink100: '#FF7A8A',
	grey: '#2E2F33',
	lightGray: '#F7F7F7',
	lightGray1: '#F7F6FF',
	lightGray2: '#F6F8FA',
	lightGray3: '#F5F8FA',
	textGrey: '#D1D0D4',
	textGrey1: '#525962',
	textGrey2: '#606060',
	textLightGrey: '#8A9499',
	lightBlue: '#DBEAFE',
	lightBlue1: '#7ABFFF',
	blue: '#0099FF',
	darkBlue: '#030C20',
	yellow: '#F5A141',
	yellow1: '#FDF0E1',
	lightGreen: '#DCFCE7',
	green: '#29CC6A',
	vanillaIce: '#CAD1E9',
} as const;

const colorsDark = {
	black: '#000000',
	black1: '#030C20',
	cyan: '#00FFFF',
	red500: '#C13333',
	red: '#FC5555',
	gray800: '#E0E0E0',
	gray400: '#969696',
	gray250: '#A19FA3',
	gray200: '#BABABA',
	gray150: '#DAE0E4',
	gray100: '#000000',
	gray80: '#E1E3EA',
	gray50: '#EFEFEF',
	gray: '#EAF1F4',
	purple500: '#A6A4F0',
	purple300: '#7C7CDE',
	purple150: '#EFEFFF',
	purple100: '#252732',
	purple50: '#1B1A23',
	pink100: '#FF7A8A',
	lightGray: '#F7F7F7',
	lightGray1: '#F7F6FF',
	lightGray2: '#F6F8FA',
	lightGray3: '#F5F8FA',
	grey: '#2E2F33',
	textGrey: '#D1D0D4',
	textGrey1: '#525962',
	textGrey2: '#606060',
	textLightGrey: '#8A9499',
	lightBlue1: '#7ABFFF',
	blue: '#0099FF',
	darkBlue: '#030C20',
	yellow: '#F5A141',
	yellow1: '#FDF0E1',
	lightGreen: '#DCFCE7',
	green: '#29CC6A',
	vanillaIce: '#CAD1E9',
} as const;

const sizes = [1, 2, 3, 4, 5, 8, 10, 12, 14, 16, 18, 20, 24, 32, 40, 42, 50, 60, 70, 75, 80, 85, 90, 100, 110, 120] as const;

export const config = {
	colors: colorsLight,
	fonts: {
		sizes,
		colors: colorsLight,
	},
	gutters: sizes,
	backgrounds: colorsLight,
	borders: {
		widths: [1, 2],
		radius: [4, 16],
		colors: colorsLight,
	},
	navigationColors: {
		...DefaultTheme.colors,
		background: colorsLight.white,
		card: colorsLight.gray50,
	},
	variants: {
		dark: {
			colors: colorsDark,
			fonts: {
				colors: colorsDark,
			},
			backgrounds: colorsDark,
			navigationColors: {
				...DarkTheme.colors,
				background: colorsDark.purple50,
				card: colorsDark.purple50,
			},
		},
	},
} as const satisfies ThemeConfiguration;
