import Page from "../../ui/Page";
import { CustomLoadsStackParamList } from "./CustomLoadsStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<
  CustomLoadsStackParamList,
  "Custom Load Details"
>;

export default function CustomLoadDetailsScreen({ route, navigation }: Props) {
  const { id } = route.params;

  return <Page></Page>;
}
