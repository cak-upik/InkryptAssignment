import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, Rect, Stop, RadialGradient } from 'react-native-svg';

const COLOR0 = 'rgb(255,255,255)';
const COLOR1 = 'rgb(153,9,221)';
const COLOR2 = 'rgb(0,0,0)';
const COLOR3 = 'rgb(63,11,147)';

const GradientBackground = ({ children }: PropsWithChildren) => {
    return (
        <View style={{ flex: 1 }}>
            <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
                <Defs>
                    {/* <LinearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="60%">
                        <Stop offset="0" stopColor={FROM_COLOR} />
                        <Stop offset="1" stopColor={TO_COLOR0} />
                    </LinearGradient> */}
                    <RadialGradient id="grad" cx="50%" cy="238%" r="250%">
                        <Stop offset="0" stopColor={COLOR2} />
                        <Stop offset="0.5" stopColor={COLOR2} />
                        <Stop offset="0.7" stopColor={COLOR2} />
                        <Stop offset="0.85" stopColor={COLOR3} />
                        <Stop offset="0.9" stopColor={COLOR1} />
                        <Stop offset="1" stopColor={COLOR0} />
                    </RadialGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)" />
                {/* <Circle cx="30%" cy="30%" r="100" fill="url(#grad)" /> */}
            </Svg>
            {children}
        </View>
    );
};

export default GradientBackground;