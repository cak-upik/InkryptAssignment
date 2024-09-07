import { ChevronLeftIcon, GradientBackground, ImageVariant, SafeScreen } from "@/components";
import { useTheme } from "@/theme";
import { RootScreenProps } from "@/types/navigation";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, TouchableHighlight, useWindowDimensions, View } from "react-native";
import CardLogo1 from "@/theme/assets/card_logo1.png";
import CardLogo2 from "@/theme/assets/card_logo2.png";
import CardLogo3 from "@/theme/assets/card_logo3.png";

function DetailScreen({ route, navigation }: RootScreenProps<'DetailScreen'>) {
    const { layout, gutters, fonts } = useTheme();
    const { title } = route.params;
    const { t } = useTranslation(['detail']);

    return (
        <SafeScreen>
            <GradientBackground>
                <View style={[layout.flex_1]}>
                    <View style={[
                        layout.row,
                        layout.itemsCenter,
                        gutters.marginVertical_50,
                        gutters.marginLeft_16
                    ]}>
                        <TouchableHighlight
                            onPress={() => navigation.goBack()}
                            underlayColor={'rgba(255, 255, 255, 0.3)'}
                        >
                            <ChevronLeftIcon />
                        </TouchableHighlight>
                        <Text
                            style={[
                                fonts.size_20,
                                fonts.white,
                                { textAlign: "center", fontFamily: "Space Grotesk", fontWeight: 700 },
                                gutters.paddingLeft_8,
                            ]}>
                            {title === "About App" ? "About the app" : title}
                        </Text>
                    </View>
                    {title === "About App" && (
                        <ImageVariant
                            style={[layout.itemsCenter, { width: 'auto', height: 160 }, gutters.marginBottom_100]}
                            source={CardLogo1}
                            sourceDark={CardLogo1}
                            resizeMode="contain"
                        />
                    )}
                    {title === "Privacy Policy" && (
                        <ImageVariant
                            style={[layout.itemsCenter, { width: 'auto', height: 160 }, gutters.marginBottom_100]}
                            source={CardLogo2}
                            sourceDark={CardLogo2}
                            resizeMode="contain"
                        />
                    )}
                    {title === "Terms & Conditions" && (
                        <ImageVariant
                            style={[layout.itemsCenter, { width: 'auto', height: 160 }, gutters.marginBottom_100]}
                            source={CardLogo3}
                            sourceDark={CardLogo3}
                            resizeMode="contain"
                        />
                    )}
                    <ScrollView
                        style={[layout.flex_1, gutters.marginLeft_24, gutters.marginRight_20]}
                        overScrollMode="never"
                    >
                        <Text
                            style={[
                                fonts.size_16,
                                fonts.white,
                                { textAlign: "left", fontFamily: "Space Grotesk", fontWeight: 700 },
                            ]}>
                            {title === "About App" && t('headingAboutApp')}
                            {title === "Privacy Policy" && t('headingPrivacyPolicy')}
                            {title === "Terms & Conditions" && t('headingTermsAndConditions')}
                        </Text>
                        <Text
                            style={[
                                fonts.size_16,
                                fonts.white,
                                { textAlign: "left", fontFamily: "Space Grotesk", fontWeight: 400 },
                            ]}>
                            {title === "About App" && (
                                <>
                                {t('contentAboutApp1')}
                                {t('contentAboutApp2')}
                                {t('contentAboutApp3')}
                                {t('contentAboutApp4')}
                                </>
                            )}
                            {title === "Privacy Policy" && (t('contentPrivacyPolicy'))}
                            {title === "Terms & Conditions" && (t('contentTermsAndConditions'))}
                        </Text>
                    </ScrollView>
                </View>
            </GradientBackground>
        </SafeScreen>
    );
}

export default DetailScreen;