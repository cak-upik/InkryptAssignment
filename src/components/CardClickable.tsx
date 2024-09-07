import { StatusBar, TouchableOpacity, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';
import components from '@/theme/components';

type Props = PropsWithChildren & {
	onItemPress: () => void;
};

function CardClickable({ children, onItemPress }: Props) {
	const { layout, gutters, components } = useTheme();

	return (
		<TouchableOpacity onPress={onItemPress}>
			<View
				style={[
					layout.flex_1,
					components.cardOutlineRounded30,
				]}
			>
				{children}
			</View>
		</TouchableOpacity>
	);
}

export default CardClickable;
