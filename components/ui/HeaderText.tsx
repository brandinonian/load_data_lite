import { ReactNode } from "react";
import { Text } from "react-native";

export default function HeaderText({ children }: { children?: ReactNode }) {
  return <Text style={{ fontSize: 48, color: "white" }}>{children}</Text>;
}
