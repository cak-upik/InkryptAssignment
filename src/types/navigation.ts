import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
	WelcomeScreen: {};
	HomeScreen: {};
	DetailScreen: {title: string};
};

export type RootScreenProps<
	S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
