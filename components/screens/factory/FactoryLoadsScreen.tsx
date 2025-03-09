import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Page from "../../ui/Page";
import { FactoryLoadsStackParamList } from "./FactoryLoadsStack";

type Props = NativeStackScreenProps<
  FactoryLoadsStackParamList,
  "Factory Loads"
>;

export default function FactoryLoadsScreen({ navigation }: Props) {
  return <Page></Page>;
}
