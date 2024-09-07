import { ArrowUpIcon, GradientBackground, ImageVariant, SafeScreen } from "@/components";
import { useTheme } from "@/theme";
import { RootScreenProps } from "@/types/navigation";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import Logo from "@/theme/assets/logo.png";
import { CommonActions } from "@react-navigation/native";

function WelcomeScreen({ navigation }: RootScreenProps<'WelcomeScreen'>) {
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
                                { textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 700 },
                                gutters.paddingTop_60,
                            ]}>
                            welcome to
                        </Text>
                        <View style={[layout.row]}>
                            <Text
                                style={[
                                    fonts.size_32,
                                    fonts.white,
                                    { textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 700 },
                                ]}>
                                my
                            </Text>
                            <Text
                                style={[
                                    fonts.size_32,
                                    fonts.cyan,
                                    { textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 700 },
                                    gutters.paddingLeft_8,
                                ]}>
                                video player.
                            </Text>
                        </View>
                        <Text
                            style={[
                                fonts.size_16,
                                fonts.gray80,
                                { width: 220, lineHeight: 25, textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 500 },
                                gutters.paddingTop_16
                            ]}
                            numberOfLines={2}>
                            Ensure your privacy and keep your content safe and secure.
                        </Text>
                    </View>
                    <ImageVariant
                        source={Logo}
                        sourceDark={Logo}
                        style={{ top: -6, aspectRatio: 3 / 11 }}
                    />
                </View>
                <TouchableOpacity
                    style={[
                        components.buttonRoundedOutline40,
                        gutters.paddingTop_8,
                        gutters.paddingBottom_8,
                        gutters.marginLeft_20,
                        gutters.marginRight_20,
                        gutters.marginBottom_60
                    ]}
                    onPress={() => {navigation.navigate("HomeScreen") }}>
                    <View style={[layout.row, gutters.paddingRight_5, gutters.gap_50]}>
                        <View style={[layout.flex_1, layout.justifyCenter, layout.itemsEnd]}>
                            <Text
                                style={[
                                    fonts.size_16,
                                    fonts.white,
                                    { textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 700 },
                                ]}>
                                Get More Information
                            </Text>

                        </View>
                        <ArrowUpIcon />
                    </View>
                </TouchableOpacity>
            </GradientBackground>
        </SafeScreen>
    );
}

export default WelcomeScreen;