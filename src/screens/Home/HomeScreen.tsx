import { CardClickable, GradientBackground, ImageVariant, SafeScreen } from "@/components";
import { useTheme } from "@/theme";
import { RootScreenProps } from "@/types/navigation";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import CardLogo1 from "@/theme/assets/card_logo1.png";
import CardLogo2 from "@/theme/assets/card_logo2.png";
import CardLogo3 from "@/theme/assets/card_logo3.png";

function HomeScreen({ navigation }: RootScreenProps<'HomeScreen'>) {
    const { layout, gutters, fonts, backgrounds, components } = useTheme();
    const { width, height } = useWindowDimensions();
    const { t } = useTranslation(['welcome']);

    return (
        <SafeScreen>
            <GradientBackground>
                <View style={[layout.flex_1, layout.itemsCenter]}>
                    <View style={[layout.col, layout.itemsCenter]}>
                        <Text
                            style={[
                                fonts.size_32,
                                fonts.white,
                                { width: 250, textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 700 },
                                gutters.paddingTop_60,
                            ]}
                            numberOfLines={2}>
                            Unlock Secure Streaming
                        </Text>
                    </View>
                    <ScrollView
                        style={[layout.flex_1, gutters.marginTop_24]}
                        overScrollMode="never"
                        showsVerticalScrollIndicator={false}>
                        <View style={[layout.col, gutters.gap_24]}>
                            <CardClickable onItemPress={() => { navigation.navigate('DetailScreen', { title: 'About App' }) }}>
                                <View style={layout.col}>
                                    <Text
                                        style={[
                                            fonts.size_20,
                                            fonts.vanillaIce,
                                            gutters.marginTop_20,
                                            { textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 700 },
                                        ]}>
                                        About App
                                    </Text>
                                    <ImageVariant
                                        style={{ width: 250, height: 150 }}
                                        source={CardLogo1}
                                        sourceDark={CardLogo1}
                                        resizeMode="contain"
                                    />
                                </View>
                            </CardClickable>
                            <CardClickable onItemPress={() => { navigation.navigate('DetailScreen', { title: 'Privacy Policy' }) }}>
                                <View style={layout.col}>
                                    <Text
                                        style={[
                                            fonts.size_20,
                                            fonts.vanillaIce,
                                            gutters.marginTop_20,
                                            { textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 700 },
                                        ]}>
                                        Privacy Policy
                                    </Text>
                                    <ImageVariant
                                        style={{ width: 250, height: 150 }}
                                        source={CardLogo2}
                                        sourceDark={CardLogo2}
                                        resizeMode="contain"
                                    />
                                </View>
                            </CardClickable>
                            <CardClickable onItemPress={() => { navigation.navigate('DetailScreen', { title: 'Terms & Conditions' }) }}>
                                <View style={layout.col}>
                                    <Text
                                        style={[
                                            fonts.size_20,
                                            fonts.vanillaIce,
                                            gutters.marginTop_20,
                                            { textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 700 },
                                        ]}>
                                        Terms & Conditions
                                    </Text>
                                    <ImageVariant
                                        style={{ width: 250, height: 150 }}
                                        source={CardLogo3}
                                        sourceDark={CardLogo3}
                                        resizeMode="contain"
                                    />
                                </View>
                            </CardClickable>
                        </View>
                    </ScrollView>
                </View>
            </GradientBackground>
        </SafeScreen>
    );
}

export default HomeScreen;