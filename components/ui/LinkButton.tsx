import { Pressable, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

export default function ActionButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={{ width: "100%" }}>
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 24,
          alignItems: "center",
          backgroundColor: Colors.secondary,
        }}
      >
        <Text style={{ fontSize: 24, color: Colors.txt_200 }}>{label}</Text>
      </View>
    </Pressable>
  );
}
