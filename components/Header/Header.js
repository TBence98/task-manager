import { View, Text } from "react-native";
import HeaderBackButton from "../UI/HeaderBackButton/HeaderBackButton";
import { useNavigation } from "@react-navigation/native";

const Header = ({ navigationTarget, title }) => {
    const navigation = useNavigation();

    function goBackHandler() {
        navigation.navigate(navigationTarget);
    }

    return (
        <View className="flex-row items-center justify-between bg-blue-600 min-h-[140px]">
            <View className="relative w-full align-center">
                <View className="absolute top-0 left-3.5 elevation-10 z-10">
                    <HeaderBackButton onPress={goBackHandler} />
                </View>
                <View className="absolute top-1 w-full">
                    <Text className="text-center text-white text-xl font-bold">
                        {title}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Header;
