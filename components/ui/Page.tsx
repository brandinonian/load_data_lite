import { ReactNode } from "react";
import { View } from "react-native";

export default function Page({
  children,
  color,
}: {
  children?: ReactNode;
  color?: string;
}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color ?? "black",
      }}
    >
      {children}
    </View>
  );
}
