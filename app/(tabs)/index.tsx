import style, { primary } from "@/assets/styles";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <Text style={{color: primary}}>Welcome</Text>
    </View>
  );
}
