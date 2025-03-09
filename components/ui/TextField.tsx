import { Text, TextInput, View } from "react-native";

export default function TextField({
  changeHandler,
  value,
  label,
}: {
  // TODO: name value 'text'?
  changeHandler: (value: string) => void;
  value: string;
  label?: string;
}) {
  return (
    <View style={{ padding: 12, width: "100%" }}>
      {label && <Text style={{ fontSize: 18, color: "white" }}>{label}</Text>}
      <TextInput
        onChangeText={changeHandler}
        value={value}
        style={{
          fontSize: 24,
          color: "white",
          width: "100%",
          padding: 10,
          borderColor: "white",
          borderWidth: 1,
        }}
      />
    </View>
  );
}
