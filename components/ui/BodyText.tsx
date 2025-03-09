import { ReactNode } from "react";
import { Text } from "react-native";

export default function BodyText({ children }: { children?: ReactNode }) {
  return <Text style={{ fontSize: 24, color: "white" }}>{children}</Text>;
}
